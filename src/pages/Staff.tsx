import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface StaffMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

const staffMembers: StaffMember[] = [
  // Owners
  {
    id: 1,
    name: "sigmacat",
    role: "Owner",
    image: "https://cdn.discordapp.com/avatars/1050893860747870261/401f66beffceb77c241ae5d610267e96.webp?size=128",
    description: "The owner of FakePixel Giveaways and professional Python and bot developer with more than 4 years of experience.",
  },
  {
    id: 2,
    name: "darkwall",
    role: "Owner",
    image: "https://cdn.discordapp.com/avatars/1238914120179515402/d5c5717f8e15c440f30c184d8136ca35.webp?size=128",
    description: "Circulator and operator of FakePixel Giveaways. A cybersecurity specialist who has worked for more than 3 companies including BDIX, the network provider of Bangladesh. Professional business handler and freelancer specializing in web development, Discord bots, Termux tools, Kali Linux tools, and web security applications.",
  },
  // Curators
  {
    id: 3,
    name: "Mr_Vari",
    role: "Curator",
    image: "https://cdn.discordapp.com/avatars/959812686961582120/a_fa400cd8d53f11dd99ef03d7e22c478e.gif?size=128",
    description: "Admin of FakePixel, the main server that FXG is related to. FXG operates as a sub-server of FakePixel.",
  },
  {
    id: 4,
    name: "Not kaneku?",
    role: "Curator",
    image: "https://cdn.discordapp.com/avatars/1331299009536725216/a3793ab197d1dcbdfa89c26f5ecfbfdd.webp?size=128",
    description: "One of the best and hardest working members of FXG. The oldest member of the community.",
  },
  // Deputies
  {
    id: 5,
    name: "Meow",
    role: "Deputy",
    image: "https://cdn.discordapp.com/avatars/984727935950946354/3d83d287f01fc084f4e197b27d2cceff.webp?size=128",
    description: "A kitty that is cute and fluffy.",
  },
  {
    id: 6,
    name: "qmwn4962",
    role: "Deputy",
    image: "https://cdn.discordapp.com/avatars/1152639517954670744/21ccd5031f8bae4954d098eadc9a4c5c.webp?size=128",
    description: "We don't know much about him. A mysterious guy.",
  },
  {
    id: 7,
    name: "ShahanCot",
    role: "Deputy",
    image: "https://cdn.discordapp.com/avatars/1413978411050733722/e26424582c84e7fb84897cc8e3e27e16.webp?size=128",
    description: "One of the oldest members of FXG who helped grow this community.",
  },
  // Admins
  {
    id: 8,
    name: "Afsank",
    role: "Admin",
    image: "https://cdn.discordapp.com/avatars/1218586070157889648/950484f786be3bb0de95238f367adf91.webp?size=128",
    description: "One of the best and #3 giveaway holder of FXG. Has hosted more than 4B coins and 7B worth of items.",
  },
  {
    id: 9,
    name: "Akshram",
    role: "Admin",
    image: "https://cdn.discordapp.com/avatars/744466067564396616/b4cf04b82212c7ed18b34b6a45705cb3.webp?size=128",
    description: "A helper of FakePixel and giveaways who has contributed a lot to the community.",
  },
  {
    id: 10,
    name: "sky",
    role: "Admin",
    image: "https://cdn.discordapp.com/avatars/905352681999188018/cec46c4e50f23189a44c1306138a6e4e.webp?size=128",
    description: "Still grinding for Judgment Core to make his Terminator.",
  },
  // Sr. Moderators
  {
    id: 11,
    name: "Greyan~Cot",
    role: "Sr. Moderator",
    image: "https://cdn.discordapp.com/avatars/841611608325488660/e1d6b587fb03cc2fbcc6315d8cc70a77.webp?size=128",
    description: "i dont remeber who he is",
  },
  // Moderators
  {
    id: 12,
    name: "Jatin",
    role: "Moderator",
    image: "https://cdn.discordapp.com/avatars/1316754985807122526/c3845b15153b85e87cb5d0b3997442f7.webp?size=128",
    description: "no discription",
  },
  {
    id: 13,
    name: "Keshav",
    role: "Moderator",
    image: "https://cdn.discordapp.com/avatars/1244565799822430279/7c12e953c63f827f74482b6d4f62eb2d.webp?size=128",
    description: "randomly cchats and ghostes people, but good guy",
  },
  {
    id: 14,
    name: "KillerCot",
    role: "Moderator",
    image: "https://cdn.discordapp.com/avatars/1080025913162469420/cc731fb82410c7e51ba0eb453493f00d.webp?size=128",
    description: "incharge of our youtube and soial media page",
  },
  {
    id: 15,
    name: "lost",
    role: "Moderator",
    image: "https://cdn.discordapp.com/avatars/934817692362371112/c8ab6c38aa1fc9fd610438d617f9d164.webp?size=128",
    description: "wait he is a staff???",
  },
  // Helpers
  {
    id: 16,
    name: "AssassinCot",
    role: "Helper",
    image: "https://cdn.discordapp.com/avatars/1221052479936921610/fd88b286ce36b2522b5e55b3bb371ff7.webp?size=128",
    description: "real discord username is _depressed_11, i love to cacll his dih-pressed",
  },
  {
    id: 17,
    name: "clonehero0904",
    role: "Helper",
    image: "https://cdn.discordapp.com/avatars/914077974746251306/5bf9071a7238b6395c6b7f1b213dcdf1.webp?size=128",
    description: "a active staff of fakepixel x giveaways",
  },
  {
    id: 18,
    name: "𝗗𝗝",
    role: "Helper",
    image: "https://cdn.discordapp.com/avatars/1084399167566254190/63f10d6f5f140ea3c1602209feb67a77.webp?size=128",
    description: "i dont like him",
  },
  {
    id: 19,
    name: "Pritam",
    role: "Helper",
    image: "https://cdn.discordapp.com/avatars/1317447751969144853/bff8634a9eebdcca46b991ae027e0ede.webp?size=128",
    description: "oganda knuckls",
  },
  {
    id: 20,
    name: "WaffleCot",
    role: "Helper",
    image: "https://cdn.discordapp.com/avatars/980861143247630346/853b75c829a589c4e97c722c33668663.webp?size=128",
    description: "smol duk",
  },
  // Jr. Helpers
  {
    id: 21,
    name: "! Rafi .❄",
    role: "Jr. Helper",
    image: "https://cdn.discordapp.com/avatars/961528679115137065/e4404f21e7419b4a4335482c0b4b69b2.webp?size=128",
    description: "cool boy (ACTUALLY CHAPRI)",
  },
  {
    id: 22,
    name: "Kannu",
    role: "Jr. Helper",
    image: "https://cdn.discordapp.com/avatars/854557437217341490/b77059ce9cf1902a2cdd23ef559c5529.webp?size=128",
    description: "she draws good, and a good girl",
  },
  {
    id: 23,
    name: "kingamer786",
    role: "Jr. Helper",
    image: "https://cdn.discordapp.com/avatars/1184557374313341061/58505fc0522c072d553a9df3da09b12f.webp?size=1024",
    description: "i dont know who is this.",
  },
];

const roleOrder = ["Owner", "Curator", "Deputy", "Admin", "Sr. Moderator", "Moderator", "Helper", "Jr. Helper"] as const;

const groupedStaff = roleOrder.map((role) => ({
  role,
  members: staffMembers.filter((m) => m.role === role),
}));

const Staff = () => {
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
          Staff
        </h1>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Meet the people behind FakePixel X Giveaways.
        </p>

        <div className="space-y-12">
          {groupedStaff.map((group, groupIndex) => (
            <motion.section
              key={group.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
            >
              <h2 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                {group.role}s
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.members.map((member, i) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: groupIndex * 0.1 + i * 0.05 }}
                    onClick={() => setSelectedMember(member)}
                    className="group cursor-pointer glass-card rounded-lg p-6 hover:bg-foreground/5 transition-colors"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full mb-4 object-cover"
                    />
                    <h3 className="font-medium text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-md hover:bg-foreground/10 transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold text-foreground mb-1">
                {selectedMember.name}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                {selectedMember.role}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                {selectedMember.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Staff;
