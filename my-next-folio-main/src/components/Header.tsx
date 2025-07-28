import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, MapPin } from "lucide-react";
import profilePhoto from "@/assets/Profile.jpg";
import resume from "@/assets/YELAPATI SOWMITH REDDY RESUME.pdf";
const Header = () => {
  return <header className="w-full max-w-4xl mx-auto px-6 pt-12 pb-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative">
          <img src={profilePhoto} alt="Profile" className="w-38 h-52 md:w-40 md:h-52 rounded-2xl object-cover border-2 border-border" />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-4xl mb-2 px-0 mx-[10px] my-px py-px font-light"><b>Sowmith Reddy Yelapati</b></h1>
          <p className="text-xl text-muted-foreground mb-4">
            Full Stack Developer & Freelancer
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span>Jangoan, Telangana, India</span>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href={resume} // <-- Replace with your actual resume link
              target="_blank"
            >
              <Button variant="secondary" size="sm" className="gap-2">
                <FileText className="w-4 h-4" />
                Resume
              </Button>
            </a>
            <a
              href="https://github.com/SowmithReddyYelapati" // <-- Replace with your GitHub profile link
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="sm" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/sowmith-reddy-yelapati-191409280/" // <-- Replace with your LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="sm" className="gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </a>
            <a
              href="mailto:2300031297cseh1@gmail.com" // <-- Replace with your email address
            >
              <Button variant="secondary" size="sm" className="gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;