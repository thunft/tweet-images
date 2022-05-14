import git, { SimpleGitOptions } from "simple-git";

// Add code , commit and push
export const pushToRemote = async () => {
  const gitOptions: Partial<SimpleGitOptions> = {
    baseDir: ".",
    binary: "git",
  };

  const gitRepo = git(gitOptions);

  await gitRepo.add("./*");
  await gitRepo.commit("[BOT] Update files");
  await gitRepo.push("origin", "master");
}