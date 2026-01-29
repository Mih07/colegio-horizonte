document.addEventListener("DOMContentLoaded", function () {
    const footer = `
        <footer style="background:#3C6E91; color:white; padding:40px 0; margin-top:50px;">
            <div class="container">

                <div class="row">

                    <div class="col-md-4 mb-4">
                        <h5 class="fw-bold">Escola Horizonte</h5>
                        <p style="font-size:15px;">
                            Educação com clareza, acolhimento e comunicação organizada.
                        </p>
                    </div>

                    <div class="col-md-4 mb-4">
                        <h6 class="fw-bold">Links Rápidos</h6>
                        <ul class="list-unstyled mt-2">
                            <li><a href="index.html" class="text-white text-decoration-none">Início</a></li>
                            <li><a href="central.html" class="text-white text-decoration-none">Central da Família</a></li>
                            <li><a href="cardapio.html" class="text-white text-decoration-none">Cardápio</a></li>
                            <li><a href="matricula.html" class="text-white text-decoration-none">Matrículas</a></li>
                        </ul>
                    </div>

                    <div class="col-md-4 mb-4">
                        <h6 class="fw-bold">Contato</h6>
                        <p class="mb-1"><strong>Telefone:</strong> (00) 00000-0000</p>
                        <p class="mb-1"><strong>Email:</strong> contato@escolahorizonte.com</p>
                        <p class="mb-1"><strong>Endereço:</strong> Rua Exemplo, 123 — Centro</p>
                    </div>

                </div>

                <hr style="border-color:rgba(255,255,255,0.3);">

                <div class="text-center mt-3">
                    <p style="font-size:14px;">© 2025 Escola Horizonte — Todos os direitos reservados.</p>
                </div>

            </div>
        </footer>
    `;

    document.getElementById("footer").innerHTML = footer;
});
