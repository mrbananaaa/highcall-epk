{
  description = "Highcall EPK Development Shell";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        # node
        nodejs
        eslint_d
        prettierd
        tailwindcss-language-server
        vscode-langservers-extracted
        typescript

        # utils
        jq
        bruno
        lazygit
        posting
      ];

      shellHook = ''
        echo "Highcall EPK development shell activated."
      '';
    };
  };
}
