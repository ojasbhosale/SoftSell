import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="footer-logo">
              <div className="bg-primary text-white font-bold text-xl p-2 rounded inline-block mr-2">SS</div>
              SoftSell
            </Link>
            <p className="text-foreground/70 mb-6">
              The #1 platform for software license reselling. Turn unused licenses into cash quickly and securely.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="GitHub">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links md:col-span-3">
            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">License Valuation</a>
                </li>
                <li>
                  <a href="#">Enterprise Solutions</a>
                </li>
                <li>
                  <a href="#">Bulk Selling</a>
                </li>
                <li>
                  <a href="#">License Management</a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Guides</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">GDPR Compliance</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-primary/10 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Stay updated with SoftSell</h3>
              <p className="text-foreground/70">Subscribe to our newsletter for the latest updates and offers.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-64 px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© {new Date().getFullYear()} SoftSell. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-foreground/70 hover:text-primary text-sm">
              Privacy
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary text-sm">
              Terms
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
