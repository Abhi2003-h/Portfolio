import { UserCog, BrainCircuit, GitPullRequestArrow } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Data Scientist & Open-source Enthusiast
            </h3>

            <p className="text-muted-foreground">
              With a strong foundation in Computer Science, I am now specializing in Data Science to transform raw data into predictive insights
               and intelligent models. I'm passionate about solving complex analytical challenges and am constantly mastering new AI
                and machine learning techniques to build smarter, data-driven applications.
            </p>

            <p className="text-muted-foreground">
              Building and contributing to FOSS (Free and Open Source Software) projects like Frappe is my area of expertise as a developer 
              with hands-on experience in full-stack frameworks. I actively seek to support the ecosystems where these technologies 
              flourish because I firmly believe in the power of community and open, cooperative development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Science & AI</h4>
                  <p className="text-muted-foreground">
                    Building predictive models and Solving complex problems with data-driven solutions and advanced analytics.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GitPullRequestArrow className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frappe Technology</h4>
                  <p className="text-muted-foreground">
                    Developing custom business applications and ERP solutions using the Frappe framework. 
                    Also Building full-stack, data-driven web applications
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <UserCog className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Community Management</h4>
                  <p className="text-muted-foreground">
                    Guiding and advising developer communities within the FOSS ecosystem, 
                    drawing from past leadership experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};