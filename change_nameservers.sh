name: Change Name Servers to Ezoic

on:
  push:
    branches:
      - main  # Change this to your default branch if different

jobs:
  change_name_servers:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2

      - name: Set executable permissions for script
        run: chmod +x change_nameservers.sh

      - name: Run Script to Change Name Servers
        run: ./change_nameservers.sh $DOMAIN $EZOID_NAMESERVER1 $EZOID_NAMESERVER2 $EZOID_NAMESERVER3 $EZOID_NAMESERVER4
        env:
          DOMAIN: "jeowebsite.github.io"
          EZOID_NAMESERVER1: "falcon.ezoicns.com"
          EZOID_NAMESERVER2: "rabbit.ezoicns.com"
          EZOID_NAMESERVER3: "somali.ezoicns.com"
          EZOID_NAMESERVER4: "turkey.ezoicns.com"
          REGISTRAR_API_KEY: "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"
