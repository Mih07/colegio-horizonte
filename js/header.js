document.addEventListener("DOMContentLoaded", function () {

    const header = `
        <nav class="navbar navbar-expand-lg navbar-dark" style="background:#3C6E91;">
            <div class="container">
             <a class="navbar-brand d-flex align-items-center" href="index.html">
    <img src="src/assets/logo site.jpg" alt="logo" width="45" height="45" class="me-2">
    Colégio Horizonte
</a>

                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuHeader">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="menuHeader">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="central.html">Central da Família</a></li>
                        <li class="nav-item"><a class="nav-link" href="cardapio.html">Cardápio</a></li>
                        <li class="nav-item"><a class="nav-link" href="matricula.html">Matrículas</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    document.getElementById("header").innerHTML = header;
});
