import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <section class="navbar-dark bg-dark header">
       <div class="container">
          <div class="row">
           <div class="col-sm-12"> 
            <nav class="navbar navbar-expand-lg ">
              <a class="navbar-brand text-white" href="#">TASK OPTIMIZER (PVT) LTD</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item ">
                    <a class="nav-link " href="#about">Home<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#destinations">Services<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#destinations">Process<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item dropdown">
                  <a class="nav-link" href="#places">Portfolio<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#tourist">Contact<span class="sr-only">(current)</span></a>
                  </li>
                </ul>
                
              </div>
             </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}

export default Header;
