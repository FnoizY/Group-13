//header component

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
      <header class="pb-5">
          <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
              <div class="container-fluid">
                <a class="navbar-brand" href="index.html">Gallery Canvas</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" href="#">Explore</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Vitage</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Poetry</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact_us.html">Contact Us</a>
                    </li>
                  </ul>
                  <form class="d-flex" role="Login" id="Log">
                    <!-- Login/Logout button -->
                  </form>
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search for Artist" aria-label="Search">
                    <button class="btn btn-secondary" type="submit">Search</button>
                  </form>
                  </div>
              </div>
          </nav> 
      </header>
      `;
    }
  }
  
  customElements.define('nav-header', Header);