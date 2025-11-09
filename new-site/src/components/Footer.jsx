export default function Footer() {
  return (
      <footer className="text-center py-4 border-top">
        <div class="footer-content">
            <p><em>Designing modern, responsive, human-centered interfaces.</em> &copy; {new Date().getFullYear()} Michelle Burton</p>
            <p>Email: <a href="mailto:msmichelleburton@yahoo.com">Michelle Burton</a> | Phone: (414) 388-5642</p>
            <div class="social-media">
                <a href="https://www.linkedin.com/in/msmichelleburton/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/michelle-burton" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://dribbble.com/mcburton" target="_blank"><i class="fab fa-dribbble"></i></a>
                <a href="https://www.figma.com/@michelleburton" target="_blank"><i class="fab fa-figma"></i></a>
            </div>
            <p class="cta"> <a href="/contact.html">Let's connect!</a></p>
        </div>
    </footer>
  );
}