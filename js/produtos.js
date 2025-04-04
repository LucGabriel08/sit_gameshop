
$(document).ready(function() {

    const produtosData = {
        iphones: [
            { 
                id: 1,
                nome: "iPhone 16 Pro Max", 
                preco: "U$ 1.133,00", 
                imagem: "imagens/iphone_16_pro_max.jpg", 
                descricao: "O mais avançado iPhone com câmera profissional"
            }
            
        ],
        macbooks: [
            {
                id: 10,
                nome: "MacBook Air M2 2024",
                preco: "U$ 870,00",
                imagem: "imagens/nmacbook_air_m2_2024.jpg", 
                descricao: "Leve, potente e com grande duração de bateria"
            }
            
            
        ],
        ipads: [
            {
                id: 20,
                nome: "iPad Pro",
                preco: "U$ 960,00",
                imagem: "imagens/ipad_pro.jpg", 
                descricao: "Desempenho profissional em um tablet"
            }
            
        ]
        
    };

    
    function renderizarProdutos() {
        try {
            
            $.each(produtosData, function(categoria, produtos) {
                const secaoId = 'Apple' + categoria.charAt(0).toUpperCase() + categoria.slice(1);
                const $secao = $('#' + secaoId);
                
                if ($secao.length === 0) {
                    console.error('Seção não encontrada:', secaoId);
                    return;
                }
                
                const $produtosGrid = $secao.find('.produtos-grid');
                $produtosGrid.empty();
                
                
                if (produtos.length === 0) {
                    $produtosGrid.append('<p class="sem-produtos">Nenhum produto disponível nesta categoria</p>');
                    return;
                }
                
                
                $.each(produtos, function(index, produto) {
                    const produtoHTML = `
                        <div class="produto-card" data-id="${produto.id}">
                            <img src="${produto.imagem}" alt="${produto.nome}" onerror="this.src='imagens/sem-imagem.jpg'">
                            <h3>${produto.nome}</h3>
                            <p class="preco">${produto.preco}</p>
                            <p class="descricao">${produto.descricao}</p>
                            <button class="btn-comprar">Comprar</button>
                        </div>
                    `;
                    $produtosGrid.append(produtoHTML);
                });
            });
        } catch (e) {
            console.error('Erro ao renderizar produtos:', e);
        }
    }

    
    renderizarProdutos();

    
    $(document).on('click', '.btn-comprar', function() {
        const $card = $(this).closest('.produto-card');
        const produtoId = $card.data('id');
        const produtoNome = $card.find('h3').text();
        
        alert(`Produto "${produtoNome}" adicionado ao carrinho! (ID: ${produtoId})`);
        
        
    });
});