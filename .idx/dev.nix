# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.bun
  ];
  # Sets environment variables in the workspace
  env = {};
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "bradlc.vscode-tailwindcss"
      "dbaeumer.vscode-eslint"
      "dsznajder.es7-react-js-snippets"
      "eamodio.gitlens"
      "esbenp.prettier-vscode"
      "formulahendry.auto-rename-tag"
      "Prisma.prisma"
      "WakaTime.vscode-wakatime"
    ];
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        bun-install = "bun ci --no-audit --prefer-offline --no-progress --timing";
        # Open editors for the following files by default, if they exist:
        default.openFiles = [ "src/App.tsx" "src/App.ts" "src/App.jsx" "src/App.js" ];
      };
      # To run something each time the workspace is (re)started, use the `onStart` hook
    };
  };
}
