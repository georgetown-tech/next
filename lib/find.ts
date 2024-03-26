import * as path from "path";
import * as fs from "fs";

import YAML from "yaml";

export function findJobs() {

  const projectsPath = path.join(process.cwd(), "/data/jobs");
  const projectNames = fs.readdirSync(projectsPath);

  return projectNames.map((i) => {
    const projectPath = path.join(projectsPath, i);
    const projectRaw = fs.readFileSync(projectPath, "utf-8");
    const projectFrontmatter = projectRaw.slice(
      3,
      projectRaw.slice(3).indexOf("---") + 3
    );

    const projectStructured = YAML.parse(projectFrontmatter);

    return projectStructured;
  });

}

export function findPortfolio() {

    const projectsPath = path.join(process.cwd(), "/data/portfolio");
    const projectNames = fs.readdirSync(projectsPath);
  
    return projectNames.map((i) => {
      const projectPath = path.join(projectsPath, i);
      const projectRaw = fs.readFileSync(projectPath, "utf-8");
      const projectFrontmatter = projectRaw.slice(
        3,
        projectRaw.slice(3).indexOf("---") + 3
      );
  
      const projectStructured = YAML.parse(projectFrontmatter);
  
      return projectStructured;
    });
  
}

export function findTeam() {

    const projectsPath = path.join(process.cwd(), "/data/team");
    const projectNames = fs.readdirSync(projectsPath);
  
    return projectNames.map((i) => {
      const projectPath = path.join(projectsPath, i);
      const projectRaw = fs.readFileSync(projectPath, "utf-8");
      const projectFrontmatter = projectRaw.slice(
        3,
        projectRaw.slice(3).indexOf("---") + 3
      );
  
      const projectStructured = YAML.parse(projectFrontmatter);
  
      return projectStructured;
    });
  
}