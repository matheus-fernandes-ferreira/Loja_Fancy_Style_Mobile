import { Category } from "../types/category";
import { Product } from "../types/product";


type Data = {
    categories: Category[],
    products: Product[]
};
export const data: Data = {
    categories: [
        {
            id: 1,
            title: '',
            cover: 'https://oqvestir.fbitsstatic.net/media/topo_mobile_categoria_vestidos.jpg?v=202410071841'
        },
        {
            id: 2,
            title: '',
            cover: 'https://1259028l.ha.azioncdn.net/img/2023/07/blog/67490/aposte-em-blusas-femininas.jpg'
        },
        {
            id: 3,
            title: '',
            cover: 'https://acdn.mitiendanube.com/stores/736/370/categories/20210323_004015_0000-2c3ebd7ef0689a7c8516164711880819-240-0.jpg'
        },
        {
            id: 4,
            title: ' ',
            cover: 'https://oqvestir.fbitsstatic.net/media/topo_mobile_categoria_acessorios_feminino.jpg?v=202410071841'
        },
        {
            id: 5,
            title: '',
            cover: 'https://oqvestir.fbitsstatic.net/media/topo_mobile_categoria_sapatos_feminino.jpg?v=202410071841'
        },
    ],

    products: [
        { id: 1, idCategory: 1, image: "https://img.lojasrenner.com.br/item/123456789/original/1.jpg", title: "Vestido Floral Longo", description: "Vestido longo com estampa floral, ideal para o verão.", price: 199.99 },
        { id: 2, idCategory: 1, image: "https://img.lojasrenner.com.br/item/987654321/original/1.jpg", title: "Vestido Tubinho Preto", description: "Elegante e versátil, perfeito para ocasiões formais.", price: 149.99 },
        { id: 3, idCategory: 1, image: "https://img.lojasrenner.com.br/item/112233445/original/1.jpg", title: "Vestido Midi Listrado", description: "Vestido midi com listras coloridas, ideal para o dia a dia.", price: 129.99 },
        { id: 4, idCategory: 1, image: "https://img.lojasrenner.com.br/item/556677889/original/1.jpg", title: "Vestido de Cetim Vermelho", description: "Vestido de cetim para ocasiões especiais, elegante e sofisticado.", price: 249.99 },
        { id: 5, idCategory: 1, image: "https://img.lojasrenner.com.br/item/998877665/original/1.jpg", title: "Vestido Boho Estampado", description: "Estilo boho com estampa étnica, leve e confortável.", price: 179.99 },
        { id: 6, idCategory: 1, image: "https://img.lojasrenner.com.br/item/445566778/original/1.jpg", title: "Vestido Jeans Curto", description: "Vestido curto de jeans, casual e moderno.", price: 139.99 },
        { id: 7, idCategory: 1, image: "https://img.lojasrenner.com.br/item/221122334/original/1.jpg", title: "Vestido de Festa com Paetês", description: "Brilhante e deslumbrante, ideal para festas e eventos noturnos.", price: 299.99 },
        { id: 8, idCategory: 1, image: "https://img.lojasrenner.com.br/item/334455667/original/1.jpg", title: "Vestido Evasê Rosa", description: "Modelagem evasê que valoriza a silhueta, perfeito para ocasiões casuais.", price: 159.99 },
        { id: 9, idCategory: 1, image: "https://img.lojasrenner.com.br/item/998822311/original/1.jpg", title: "Vestido Envelope Estampado", description: "Vestido estilo envelope com estampa floral delicada.", price: 189.99 },
        { id: 10, idCategory: 1, image: "https://img.lojasrenner.com.br/item/778899110/original/1.jpg", title: "Vestido de Veludo", description: "Vestido elegante de veludo, perfeito para o inverno.", price: 269.99 },
        { id: 11, idCategory: 1, image: "https://img.lojasrenner.com.br/item/121314151/original/1.jpg", title: "Vestido Off-White", description: "Clássico e sofisticado, ideal para eventos formais.", price: 219.99 },
        { id: 12, idCategory: 1, image: "https://img.lojasrenner.com.br/item/141516171/original/1.jpg", title: "Vestido de Tricô", description: "Confortável e estiloso, com gola alta para o inverno.", price: 189.99 },
        { id: 13, idCategory: 1, image: "https://img.lojasrenner.com.br/item/131415161/original/1.jpg", title: "Vestido de Renda Branco", description: "Delicado e romântico, com detalhes em renda.", price: 249.99 },
        { id: 14, idCategory: 1, image: "https://img.lojasrenner.com.br/item/151617181/original/1.jpg", title: "Vestido Assimétrico", description: "Vestido moderno com corte assimétrico, estilo arrojado.", price: 199.99 },
        { id: 15, idCategory: 1, image: "https://img.lojasrenner.com.br/item/171819202/original/1.jpg", title: "Vestido de Alça Listrado", description: "Vestido de alça com listras coloridas, leve e confortável.", price: 129.99 },
        { id: 16, idCategory: 1, image: "https://img.lojasrenner.com.br/item/202122232/original/1.jpg", title: "Vestido Estampado de Lenço", description: "Inspirado em lenços, com estampa vibrante e fluida.", price: 189.99 },
        { id: 17, idCategory: 1, image: "https://img.lojasrenner.com.br/item/232425262/original/1.jpg", title: "Vestido Longo de Malha", description: "Confortável e casual, ideal para o dia a dia.", price: 149.99 },
        { id: 18, idCategory: 1, image: "https://img.lojasrenner.com.br/item/252627282/original/1.jpg", title: "Vestido de Festa com Tule", description: "Vestido com detalhes em tule, delicado e elegante.", price: 279.99 },
        { id: 19, idCategory: 1, image: "https://img.lojasrenner.com.br/item/282930313/original/1.jpg", title: "Vestido Estampado com Babados", description: "Leve e fluido, com detalhes de babados.", price: 169.99 },
        { id: 20, idCategory: 1, image: "https://img.lojasrenner.com.br/item/313233343/original/1.jpg", title: "Vestido com Gola Alta", description: "Sofisticado e moderno, com gola alta para um visual elegante.", price: 199.99 },
        { id: 21, idCategory: 2, image: "https://img.lojasrenner.com.br/item/343536371/original/1.jpg", title: "Blusa Ciganinha Branca", description: "Blusa estilo ciganinha com mangas bufantes e tecido leve.", price: 79.99 },
        { id: 22, idCategory: 2, image: "https://img.lojasrenner.com.br/item/373839404/original/1.jpg", title: "Camisa Social de Seda", description: "Camisa social feminina de seda com corte elegante.", price: 149.99 },
        { id: 23, idCategory: 2, image: "https://img.lojasrenner.com.br/item/404142434/original/1.jpg", title: "Blusa de Renda Preta", description: "Blusa de renda delicada, perfeita para ocasiões especiais.", price: 99.99 },
        { id: 24, idCategory: 2, image: "https://img.lojasrenner.com.br/item/434445464/original/1.jpg", title: "Camisa Jeans Feminina", description: "Camisa jeans casual, ideal para combinações versáteis.", price: 119.99 },
        { id: 25, idCategory: 2, image: "https://img.lojasrenner.com.br/item/464748494/original/1.jpg", title: "Blusa de Alça de Cetim", description: "Blusa de alça em cetim, sofisticada e ideal para saídas noturnas.", price: 89.99 },
        { id: 26, idCategory: 2, image: "https://img.lojasrenner.com.br/item/494950505/original/1.jpg", title: "Camisa Xadrez Feminina", description: "Estilo casual com padrão xadrez clássico e mangas longas.", price: 109.99 },
        { id: 27, idCategory: 2, image: "https://img.lojasrenner.com.br/item/505152535/original/1.jpg", title: "Blusa com Ombro de Fora", description: "Blusa moderna com recorte de ombro à mostra.", price: 89.99 },
        { id: 28, idCategory: 2, image: "https://img.lojasrenner.com.br/item/535455565/original/1.jpg", title: "Blusa de Tricô Gola Alta", description: "Blusa quentinha de tricô com gola alta, perfeita para o inverno.", price: 119.99 },
        { id: 29, idCategory: 2, image: "https://img.lojasrenner.com.br/item/565758596/original/1.jpg", title: "Camisa Social Branca", description: "Camisa social clássica, ideal para o trabalho ou eventos formais.", price: 129.99 },
        { id: 30, idCategory: 2, image: "https://img.lojasrenner.com.br/item/596061616/original/1.jpg", title: "Blusa Cropped de Manga Longa", description: "Blusa cropped com manga longa, estilo moderno e casual.", price: 79.99 },
        { id: 31, idCategory: 2, image: "https://img.lojasrenner.com.br/item/616263646/original/1.jpg", title: "Blusa de Tule Transparente", description: "Blusa transparente de tule, ideal para sobreposição.", price: 69.99 },
        { id: 32, idCategory: 2, image: "https://img.lojasrenner.com.br/item/646566676/original/1.jpg", title: "Camisa com Laço no Pescoço", description: "Camisa elegante com laço no pescoço, para um look refinado.", price: 149.99 },
        { id: 33, idCategory: 2, image: "https://img.lojasrenner.com.br/item/676869707/original/1.jpg", title: "Blusa Básica de Algodão", description: "Blusa básica de algodão, disponível em várias cores.", price: 49.99 },
        { id: 34, idCategory: 2, image: "https://img.lojasrenner.com.br/item/707172737/original/1.jpg", title: "Camisa Estampada Floral", description: "Camisa leve com estampa floral delicada.", price: 99.99 },
        { id: 35, idCategory: 2, image: "https://img.lojasrenner.com.br/item/737475767/original/1.jpg", title: "Blusa com Babados", description: "Blusa leve com detalhes de babados nas mangas.", price: 89.99 },
        { id: 36, idCategory: 2, image: "https://img.lojasrenner.com.br/item/767778797/original/1.jpg", title: "Camisa Oversized Listrada", description: "Camisa oversized com listras, estilo despojado e moderno.", price: 119.99 },
        { id: 37, idCategory: 2, image: "https://img.lojasrenner.com.br/item/798081828/original/1.jpg", title: "Blusa Canelada Gola V", description: "Blusa canelada com gola em V, ideal para o dia a dia.", price: 69.99 },
        { id: 38, idCategory: 2, image: "https://img.lojasrenner.com.br/item/828384858/original/1.jpg", title: "Blusa Ombro a Ombro Listrada", description: "Blusa ombro a ombro com listras finas, moderna e confortável.", price: 79.99 },
        { id: 39, idCategory: 2, image: "https://img.lojasrenner.com.br/item/858687888/original/1.jpg", title: "Camisa com Detalhes em Renda", description: "Camisa delicada com detalhes em renda nos punhos.", price: 139.99 },
        { id: 40, idCategory: 2, image: "https://img.lojasrenner.com.br/item/888990919/original/1.jpg", title: "Blusa com Estampa Animal Print", description: "Blusa com estampa de animal print, tendência moderna.", price: 109.99 },
        { id: 41, idCategory: 3, image: "https://img.lojasrenner.com.br/item/919293949/original/1.jpg", title: "Calça Skinny Jeans", description: "Calça skinny jeans de cintura alta, ajustada ao corpo.", price: 129.99 },
        { id: 42, idCategory: 3, image: "https://img.lojasrenner.com.br/item/949596979/original/1.jpg", title: "Saia Midi Plissada", description: "Saia midi plissada com caimento elegante e delicado.", price: 119.99 },
        { id: 43, idCategory: 3, image: "https://img.lojasrenner.com.br/item/979899100/original/1.jpg", title: "Calça Pantalona Preta", description: "Calça pantalona com corte amplo e tecido leve.", price: 139.99 },
        { id: 44, idCategory: 3, image: "https://img.lojasrenner.com.br/item/100101102/original/1.jpg", title: "Saia Jeans Curta", description: "Saia jeans curta com lavagem clara, casual e moderna.", price: 89.99 },
        { id: 45, idCategory: 3, image: "https://img.lojasrenner.com.br/item/102103104/original/1.jpg", title: "Calça Cargo Feminina", description: "Calça cargo com bolsos laterais, estilo utilitário.", price: 159.99 },
        { id: 46, idCategory: 3, image: "https://img.lojasrenner.com.br/item/104105106/original/1.jpg", title: "Saia Longa Estampada", description: "Saia longa com estampa floral, leve e ideal para o verão.", price: 129.99 },
        { id: 47, idCategory: 3, image: "https://img.lojasrenner.com.br/item/106107108/original/1.jpg", title: "Calça de Alfaiataria", description: "Calça de alfaiataria clássica com corte reto.", price: 179.99 },
        { id: 48, idCategory: 3, image: "https://img.lojasrenner.com.br/item/108109110/original/1.jpg", title: "Saia Lápis", description: "Saia lápis ajustada ao corpo, ideal para o trabalho.", price: 99.99 },
        { id: 49, idCategory: 3, image: "https://img.lojasrenner.com.br/item/110111112/original/1.jpg", title: "Calça Jogger Moletom", description: "Confortável e estilosa, calça jogger de moletom para o dia a dia.", price: 79.99 },
        { id: 50, idCategory: 3, image: "https://img.lojasrenner.com.br/item/112113114/original/1.jpg", title: "Saia de Couro Ecológico", description: "Saia de couro ecológico com zíper lateral.", price: 149.99 },
        { id: 51, idCategory: 3, image: "https://img.lojasrenner.com.br/item/114115116/original/1.jpg", title: "Calça Flare", description: "Calça flare de cintura alta, estilo anos 70.", price: 139.99 },
        { id: 52, idCategory: 3, image: "https://img.lojasrenner.com.br/item/116117118/original/1.jpg", title: "Saia Godê Estampada", description: "Saia godê com estampa floral, leve e fluida.", price: 119.99 },
        { id: 53, idCategory: 3, image: "https://img.lojasrenner.com.br/item/118119120/original/1.jpg", title: "Calça Legging Preta", description: "Calça legging básica, ideal para atividades físicas ou uso casual.", price: 59.99 },
        { id: 54, idCategory: 3, image: "https://img.lojasrenner.com.br/item/120121122/original/1.jpg", title: "Saia Envelope", description: "Saia envelope ajustável, com amarração lateral.", price: 109.99 },
        { id: 55, idCategory: 3, image: "https://img.lojasrenner.com.br/item/122123124/original/1.jpg", title: "Calça Jeans Boyfriend", description: "Calça jeans boyfriend com modelagem solta e confortável.", price: 149.99 },
        { id: 56, idCategory: 3, image: "https://img.lojasrenner.com.br/item/124125126/original/1.jpg", title: "Saia de Tule", description: "Saia de tule, leve e delicada, ideal para eventos especiais.", price: 139.99 },
        { id: 57, idCategory: 3, image: "https://img.lojasrenner.com.br/item/126127128/original/1.jpg", title: "Calça Clochard", description: "Calça clochard de cintura alta com amarração na cintura.", price: 159.99 },
        { id: 58, idCategory: 3, image: "https://img.lojasrenner.com.br/item/128129130/original/1.jpg", title: "Saia Midi Justa", description: "Saia midi justa ao corpo, com tecido canelado.", price: 99.99 },
        { id: 59, idCategory: 3, image: "https://img.lojasrenner.com.br/item/130131132/original/1.jpg", title: "Calça Pantacourt", description: "Calça pantacourt com corte moderno e confortável.", price: 129.99 },
        { id: 60, idCategory: 3, image: "https://img.lojasrenner.com.br/item/132133134/original/1.jpg", title: "Saia Evasê", description: "Saia evasê com caimento leve, ideal para o dia a dia.", price: 89.99 },
        { id: 61, idCategory: 4, image: "https://img.lojasrenner.com.br/item/134135136/original/1.jpg", title: "Jaqueta Jeans Oversized", description: "Jaqueta jeans oversized com lavagem clara, estilo casual e moderno.", price: 199.99 },
        { id: 62, idCategory: 4, image: "https://img.lojasrenner.com.br/item/136137138/original/1.jpg", title: "Casaco de Lã Batida", description: "Casaco de lã batida, elegante e perfeito para o inverno.", price: 249.99 },
        { id: 63, idCategory: 4, image: "https://img.lojasrenner.com.br/item/138139140/original/1.jpg", title: "Jaqueta de Couro Sintético", description: "Jaqueta de couro sintético com zíper, ideal para um look descolado.", price: 189.99 },
        { id: 64, idCategory: 4, image: "https://img.lojasrenner.com.br/item/140141142/original/1.jpg", title: "Casaco Trench Coat", description: "Trench coat clássico, ideal para dias chuvosos e estilos formais.", price: 299.99 },
        { id: 65, idCategory: 4, image: "https://img.lojasrenner.com.br/item/142143144/original/1.jpg", title: "Jaqueta Puffer Feminina", description: "Jaqueta puffer acolchoada, perfeita para dias frios.", price: 229.99 },
        { id: 66, idCategory: 4, image: "https://img.lojasrenner.com.br/item/144145146/original/1.jpg", title: "Blazer Estruturado", description: "Blazer feminino estruturado, ideal para o ambiente de trabalho.", price: 189.99 },
        { id: 67, idCategory: 4, image: "https://img.lojasrenner.com.br/item/146147148/original/1.jpg", title: "Jaqueta Bomber Estampada", description: "Jaqueta bomber com estampa moderna, estilo casual.", price: 149.99 },
        { id: 68, idCategory: 4, image: "https://img.lojasrenner.com.br/item/148149150/original/1.jpg", title: "Casaco de Tricô Longo", description: "Casaco de tricô alongado, confortável e ideal para dias frios.", price: 169.99 },
        { id: 69, idCategory: 4, image: "https://img.lojasrenner.com.br/item/150151152/original/1.jpg", title: "Jaqueta Varsity", description: "Jaqueta estilo varsity, com detalhes em couro sintético.", price: 199.99 },
        { id: 70, idCategory: 4, image: "https://img.lojasrenner.com.br/item/152153154/original/1.jpg", title: "Casaco de Pelo Sintético", description: "Casaco com acabamento de pelo sintético, elegante e aconchegante.", price: 279.99 },
        { id: 71, idCategory: 4, image: "https://img.lojasrenner.com.br/item/154155156/original/1.jpg", title: "Blazer Xadrez", description: "Blazer xadrez com corte reto, perfeito para um look casual chic.", price: 169.99 },
        { id: 72, idCategory: 4, image: "https://img.lojasrenner.com.br/item/156157158/original/1.jpg", title: "Jaqueta de Veludo", description: "Jaqueta de veludo cotelê, ideal para dias frios com estilo.", price: 189.99 },
        { id: 73, idCategory: 4, image: "https://img.lojasrenner.com.br/item/158159160/original/1.jpg", title: "Casaco Parka Feminino", description: "Parka feminina com capuz removível e bolsos utilitários.", price: 229.99 },
        { id: 74, idCategory: 4, image: "https://img.lojasrenner.com.br/item/160161162/original/1.jpg", title: "Blazer de Linho", description: "Blazer de linho leve, ideal para looks de verão elegantes.", price: 199.99 },
        { id: 75, idCategory: 4, image: "https://img.lojasrenner.com.br/item/162163164/original/1.jpg", title: "Jaqueta Militar", description: "Jaqueta estilo militar com bolsos utilitários, prática e estilosa.", price: 179.99 },
        { id: 76, idCategory: 4, image: "https://img.lojasrenner.com.br/item/164165166/original/1.jpg", title: "Casaco Impermeável", description: "Casaco impermeável, ideal para dias de chuva.", price: 259.99 },
        { id: 77, idCategory: 4, image: "https://img.lojasrenner.com.br/item/166167168/original/1.jpg", title: "Jaqueta de Moletom com Capuz", description: "Jaqueta de moletom com capuz, confortável para o dia a dia.", price: 119.99 },
        { id: 78, idCategory: 4, image: "https://img.lojasrenner.com.br/item/168169170/original/1.jpg", title: "Blazer Feminino Acinturado", description: "Blazer acinturado com corte elegante e sofisticado.", price: 209.99 },
        { id: 79, idCategory: 4, image: "https://img.lojasrenner.com.br/item/170171172/original/1.jpg", title: "Jaqueta Esportiva", description: "Jaqueta esportiva leve, ideal para atividades ao ar livre.", price: 139.99 },
        { id: 80, idCategory: 4, image: "https://img.lojasrenner.com.br/item/172173174/original/1.jpg", title: "Casaco Peacoat", description: "Casaco peacoat com botões duplos, estilo clássico e elegante.", price: 269.99 },
        { id: 81, idCategory: 5, image: "https://img.lojasrenner.com.br/item/174175176/original/1.jpg", title: "Vestido Midi Floral", description: "Vestido midi com estampa floral, ideal para eventos casuais.", price: 149.99 },
        { id: 82, idCategory: 5, image: "https://img.lojasrenner.com.br/item/176177178/original/1.jpg", title: "Vestido Longo de Renda", description: "Vestido longo com detalhes em renda, elegante para ocasiões especiais.", price: 249.99 },
        { id: 83, idCategory: 5, image: "https://img.lojasrenner.com.br/item/178179180/original/1.jpg", title: "Vestido Tubinho Preto", description: "Vestido tubinho preto básico, ajustado ao corpo, ideal para eventos formais.", price: 129.99 },
        { id: 84, idCategory: 5, image: "https://img.lojasrenner.com.br/item/180181182/original/1.jpg", title: "Vestido Envelope Estampado", description: "Vestido envelope com estampa tropical, leve e confortável.", price: 139.99 },
        { id: 85, idCategory: 5, image: "https://img.lojasrenner.com.br/item/182183184/original/1.jpg", title: "Vestido de Cetim", description: "Vestido de cetim acetinado, sofisticado para eventos noturnos.", price: 189.99 },
        { id: 86, idCategory: 5, image: "https://img.lojasrenner.com.br/item/184185186/original/1.jpg", title: "Vestido Jeans Curto", description: "Vestido jeans curto com bolsos, casual e moderno.", price: 109.99 },
        { id: 87, idCategory: 5, image: "https://img.lojasrenner.com.br/item/186187188/original/1.jpg", title: "Vestido Ciganinha", description: "Vestido estilo ciganinha com ombro de fora e babados.", price: 119.99 },
        { id: 88, idCategory: 5, image: "https://img.lojasrenner.com.br/item/188189190/original/1.jpg", title: "Vestido de Tricô", description: "Vestido de tricô ajustado ao corpo, ideal para dias mais frios.", price: 159.99 },
        { id: 89, idCategory: 5, image: "https://img.lojasrenner.com.br/item/190191192/original/1.jpg", title: "Vestido Godê de Poá", description: "Vestido godê com estampa de poá, retrô e charmoso.", price: 129.99 },
        { id: 90, idCategory: 5, image: "https://img.lojasrenner.com.br/item/192193194/original/1.jpg", title: "Vestido Longo de Malha", description: "Vestido longo de malha com alças finas, ideal para o verão.", price: 119.99 },
        { id: 91, idCategory: 5, image: "https://img.lojasrenner.com.br/item/194195196/original/1.jpg", title: "Vestido Slip Dress", description: "Slip dress de cetim, minimalista e elegante.", price: 179.99 },
        { id: 92, idCategory: 5, image: "https://img.lojasrenner.com.br/item/196197198/original/1.jpg", title: "Vestido Peplum", description: "Vestido peplum com babado na cintura, elegante para eventos formais.", price: 159.99 },
        { id: 93, idCategory: 5, image: "https://img.lojasrenner.com.br/item/198199200/original/1.jpg", title: "Vestido Longo Boho", description: "Vestido longo boho com estampa étnica, leve e fluido.", price: 149.99 },
        { id: 94, idCategory: 5, image: "https://img.lojasrenner.com.br/item/200201202/original/1.jpg", title: "Vestido Curto de Paetês", description: "Vestido curto coberto de paetês, perfeito para festas.", price: 229.99 },
        { id: 95, idCategory: 5, image: "https://img.lojasrenner.com.br/item/202203204/original/1.jpg", title: "Vestido de Linho", description: "Vestido de linho com botões frontais, ideal para looks de verão.", price: 179.99 },
        { id: 96, idCategory: 5, image: "https://img.lojasrenner.com.br/item/204205206/original/1.jpg", title: "Vestido Rodado Floral", description: "Vestido rodado com estampa floral delicada, ideal para eventos diurnos.", price: 139.99 },
        { id: 97, idCategory: 5, image: "https://img.lojasrenner.com.br/item/206207208/original/1.jpg", title: "Vestido de Alça Fina", description: "Vestido curto com alça fina, casual e fresco.", price: 109.99 },
        { id: 98, idCategory: 5, image: "https://img.lojasrenner.com.br/item/208209210/original/1.jpg", title: "Vestido de Festa Longo", description: "Vestido de festa longo com detalhes em pedraria.", price: 299.99 },
        { id: 99, idCategory: 5, image: "https://img.lojasrenner.com.br/item/210211212/original/1.jpg", title: "Vestido Evasê", description: "Vestido evasê com caimento solto e confortável.", price: 149.99 },
        { id: 100, idCategory: 5, image: "https://img.lojasrenner.com.br/item/212213214/original/1.jpg", title: "Vestido Midi Listrado", description: "Vestido midi listrado, casual e elegante.", price: 139.99 }


    ]

}