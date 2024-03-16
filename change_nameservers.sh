#!/bin/bash

# Domain name
DOMAIN="jeowebsite.github.io"

# Ezoic name servers
EZOID_NAMESERVER1="falcon.ezoicns.com"
EZOID_NAMESERVER2="rabbit.ezoicns.com"
EZOID_NAMESERVER3="somali.ezoicns.com"
EZOID_NAMESERVER4="turkey.ezoicns.com"

# Registrar API Key
REGISTRAR_API_KEY="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"

# Command to change name servers using registrar's API
# This is a placeholder example; replace it with the actual command or API call to your domain registrar
echo "Changing name servers for domain $DOMAIN to $EZOID_NAMESERVER1, $EZOID_NAMESERVER2, $EZOID_NAMESERVER3, and $EZOID_NAMESERVER4"
# Example command:
# registrar_api_command --domain "$DOMAIN" --nameservers "$EZOID_NAMESERVER1,$EZOID_NAMESERVER2,$EZOID_NAMESERVER3,$EZOID_NAMESERVER4" --apikey "$REGISTRAR_API_KEY"
