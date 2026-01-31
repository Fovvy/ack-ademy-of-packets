import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "The Ack-ademy of packets",
    description: "A beginner-friendly guide to understand networking concepts with practical examples.",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/01-ip-addressing/' }
        ],
        sidebar: [
            {
                text: 'The Chapters of Knowledge',
                items: [
                    { text: '01. IP Addressing', link: '/01-ip-addressing/' },
                    { text: '02. TCP/IP & OSI', link: '/02-tcp-ip/' },
                    { text: '03. DNS', link: '/03-dns/' },
                    { text: '04. HTTP & HTTPS', link: '/04-http-https/' },
                    { text: '05. Load Balancing', link: '/05-load-balancing/' },
                    { text: '06. Firewalls', link: '/06-firewalls/' },
                    { text: '07. VPN & Tunneling', link: '/07-vpn-tunneling/' },
                    { text: '08. Proxies', link: '/08-proxies/' },
                    { text: '09. CDN', link: '/09-cdn/' },
                    { text: '10. Docker Networking', link: '/10-docker-networking/' },
                    { text: '11. Kubernetes Networking', link: '/11-kubernetes-networking/' },
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Fovvy/ack-ademy-of-packets' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026 Fovvy'
        }
    },
    appearance: 'dark'
})
