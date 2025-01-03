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
            title: 'Vestidos',
            cover: 'https://oqvestir.fbitsstatic.net/media/topo_mobile_categoria_vestidos.jpg?v=202410071841'
        },
        {
            id: 2,
            title: 'Camisetas e blusas',
            cover: 'https://1259028l.ha.azioncdn.net/img/2023/07/blog/67490/aposte-em-blusas-femininas.jpg'
        },
        {
            id: 3,
            title: 'Saias',
            cover: 'https://acdn.mitiendanube.com/stores/736/370/categories/20210323_004015_0000-2c3ebd7ef0689a7c8516164711880819-240-0.jpg'
        },
        {
            id: 4,
            title: 'Acessórios ',
            cover: 'https://oqvestir.fbitsstatic.net/media/topo_mobile_categoria_acessorios_feminino.jpg?v=202410071841'
        },
        {
            id: 5,
            title: 'Sapatos',
            cover: 'https://oqvestir.fbitsstatic.net/media/topo_mobile_categoria_sapatos_feminino.jpg?v=202410071841'
        },
    ],

    products: [
        { id: 1, idCategory: 1, image: "https://img.lojasrenner.com.br/item/915648711/original/1.jpg", title: "Vestido Floral Longo", description: "Vestido longo com estampa floral, ideal para o verão.", price: 199.99 },
        { id: 2, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/504825-570-814/", title: "Vestido Tubinho Preto", description: "Elegante e versátil, perfeito para ocasiões formais.", price: 149.99 },
        { id: 3, idCategory: 1, image: "https://img.lojasrenner.com.br/item/927971822/original/3.jpg", title: "Vestido Midi Listrado", description: "Vestido midi com listras coloridas, ideal para o dia a dia.", price: 129.99 },
        { id: 4, idCategory: 1, image: "https://img.lojasrenner.com.br/item/927353039/original/3.jpg", title: "Vestido de Cetim Vermelho", description: "Vestido de cetim para ocasiões especiais, elegante e sofisticado.", price: 249.99 },
        { id: 5, idCategory: 1, image: "https://img.lojasrenner.com.br/item/927497121/large/3.jpg", title: "Vestido Boho Estampado", description: "Estilo boho com estampa étnica, leve e confortável.", price: 179.99 },
        { id: 6, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/505183-570-814/", title: "Vestido Jeans Curto", description: "Vestido curto de jeans, casual e moderno.", price: 139.99 },
        { id: 7, idCategory: 1, image: "https://cea.vtexassets.com/arquivos/ids/56893963-1600-auto?v=638107954321300000&width=1600&height=auto&aspect=true", title: "Vestido de Festa com Paetês", description: "Brilhante e deslumbrante, ideal para festas e eventos noturnos.", price: 299.99 },
        { id: 8, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/498975-570-814/", title: "Vestido Evasê Rosa", description: "Modelagem evasê que valoriza a silhueta, perfeito para ocasiões casuais.", price: 159.99 },
        { id: 9, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/513039-570-814/", title: "Vestido Envelope Estampado", description: "Vestido estilo envelope com estampa floral delicada.", price: 189.99 },
        { id: 10, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/513039-570-814/", title: "Vestido de Veludo", description: "Vestido elegante de veludo, perfeito para o inverno.", price: 269.99 },
        { id: 11, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/499040-570-814/", title: "Vestido Off-White", description: "Clássico e sofisticado, ideal para eventos formais.", price: 219.99 },
        { id: 12, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/513139-570-814/", title: "Vestido de Tricô", description: "Confortável e estiloso, com gola alta para o inverno.", price: 189.99 },
        { id: 13, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/504245-570-814/", title: "Vestido de Renda Branco", description: "Delicado e romântico, com detalhes em renda.", price: 249.99 },
        { id: 14, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/499986-570-814/", title: "Vestido Assimétrico", description: "Vestido moderno com corte assimétrico, estilo arrojado.", price: 199.99 },
        { id: 15, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/504145-570-814/", title: "Vestido de Alça Listrado", description: "Vestido de alça com listras coloridas, leve e confortável.", price: 129.99 },
        { id: 16, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/505725-570-814/", title: "Vestido Estampado de Lenço", description: "Inspirado em lenços, com estampa vibrante e fluida.", price: 189.99 },
        { id: 17, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/498960-570-814/", title: "Vestido Longo de Malha", description: "Confortável e casual, ideal para o dia a dia.", price: 149.99 },
        { id: 18, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/512942-570-814/", title: "Vestido de Festa com Tule", description: "Vestido com detalhes em tule, delicado e elegante.", price: 279.99 },
        { id: 19, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/513948-570-814/", title: "Vestido Estampado com Babados", description: "Leve e fluido, com detalhes de babados.", price: 169.99 },
        { id: 20, idCategory: 1, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/508314-570-814/", title: "Vestido com Gola Alta", description: "Sofisticado e moderno, com gola alta para um visual elegante.", price: 199.99 },
        { id: 21, idCategory: 2, image: "https://img.lojasrenner.com.br/item/927714480/original/3.jpg", title: "Blusa Ciganinha Branca", description: "Blusa estilo ciganinha com mangas bufantes e tecido leve.", price: 79.99 },
        { id: 22, idCategory: 2, image: "https://img.lojasrenner.com.br/item/879660375/original/3.jpg", title: "Camisa Social de Seda", description: "Camisa social feminina de seda com corte elegante.", price: 149.99 },
        { id: 23, idCategory: 2, image: "https://img.lojasrenner.com.br/item/927687792/original/3.jpg", title: "Blusa de Renda Preta", description: "Blusa de renda delicada, perfeita para ocasiões especiais.", price: 99.99 },
        { id: 24, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/392451-570-814/", title: "Camisa Jeans Feminina", description: "Camisa jeans casual, ideal para combinações versáteis.", price: 119.99 },
        { id: 25, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/339960-570-814/", title: "Blusa de Alça de Cetim", description: "Blusa de alça em cetim, sofisticada e ideal para saídas noturnas.", price: 89.99 },
        { id: 26, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/497277-570-814/", title: "Camisa Xadrez Feminina", description: "Estilo casual com padrão xadrez clássico e mangas longas.", price: 109.99 },
        { id: 27, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/497057-570-814/", title: "Blusa com Ombro de Fora", description: "Blusa moderna com recorte de ombro à mostra.", price: 89.99 },
        { id: 28, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/503840-570-814/", title: "Blusa de Tricô Gola Alta", description: "Blusa quentinha de tricô com gola alta, perfeita para o inverno.", price: 119.99 },
        { id: 29, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/512165-570-814/", title: "Camisa Social Branca", description: "Camisa social clássica, ideal para o trabalho ou eventos formais.", price: 129.99 },
        { id: 30, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/507020-570-814/", title: "Blusa Cropped de Manga Longa", description: "Blusa cropped com manga longa, estilo moderno e casual.", price: 79.99 },
        { id: 31, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/507020-570-814/", title: "Blusa de Tule Transparente", description: "Blusa transparente de tule, ideal para sobreposição.", price: 69.99 },
        { id: 32, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/463852-570-814/", title: "Camisa com Laço no Pescoço", description: "Camisa elegante com laço no pescoço, para um look refinado.", price: 149.99 },
        { id: 33, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/459288-570-814/", title: "Blusa Básica de Algodão", description: "Blusa básica de algodão, disponível em várias cores.", price: 49.99 },
        { id: 34, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/425135-570-814/", title: "Camisa Estampada Floral", description: "Camisa leve com estampa floral delicada.", price: 99.99 },
        { id: 35, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/393977-570-814/", title: "Blusa com Babados", description: "Blusa leve com detalhes de babados nas mangas.", price: 89.99 },
        { id: 36, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/397766-570-814/", title: "Camisa Oversized Listrada", description: "Camisa oversized com listras, estilo despojado e moderno.", price: 119.99 },
        { id: 37, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/343965-570-814/", title: "Blusa Canelada Gola V", description: "Blusa canelada com gola em V, ideal para o dia a dia.", price: 69.99 },
        { id: 38, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/481431-570-814/", title: "Blusa Ombro a Ombro Listrada", description: "Blusa ombro a ombro com listras finas, moderna e confortável.", price: 79.99 },
        { id: 39, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/439258-570-814/", title: "Camisa com Detalhes em Renda", description: "Camisa delicada com detalhes em renda nos punhos.", price: 139.99 },
        { id: 40, idCategory: 2, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/336474-570-814/", title: "Blusa com Estampa Animal Print", description: "Blusa com estampa de animal print, tendência moderna.", price: 109.99 },
        { id: 41, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/498876-570-814/", title: "Calça Skinny Jeans", description: "Calça skinny jeans de cintura alta, ajustada ao corpo.", price: 129.99 },
        { id: 42, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/513343-570-814/", title: "Saia Midi Plissada", description: "Saia midi plissada com caimento elegante e delicado.", price: 119.99 },
        { id: 43, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/498800-570-814/", title: "Calça Pantalona Preta", description: "Calça pantalona com corte amplo e tecido leve.", price: 139.99 },
        { id: 44, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/512636-570-814/", title: "Saia Jeans Curta", description: "Saia jeans curta com lavagem clara, casual e moderna.", price: 89.99 },
        { id: 45, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/512646-570-814/", title: "Calça Cargo Feminina", description: "Calça cargo com bolsos laterais, estilo utilitário.", price: 159.99 },
        { id: 46, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/512649-570-814/", title: "Saia Longa Estampada", description: "Saia longa com estampa floral, leve e ideal para o verão.", price: 129.99 },
        { id: 47, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/512728-570-814/", title: "Calça de Alfaiataria", description: "Calça de alfaiataria clássica com corte reto.", price: 179.99 },
        { id: 48, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/498880-570-814/", title: "Saia Lápis", description: "Saia lápis ajustada ao corpo, ideal para o trabalho.", price: 99.99 },
        { id: 49, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/498368-570-814/", title: "Calça Jogger Moletom", description: "Confortável e estilosa, calça jogger de moletom para o dia a dia.", price: 79.99 },
        { id: 50, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/508924-570-814/", title: "Saia de Couro Ecológico", description: "Saia de couro ecológico com zíper lateral.", price: 149.99 },
        { id: 51, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/507502-570-814/", title: "Calça Flare", description: "Calça flare de cintura alta, estilo anos 70.", price: 139.99 },
        { id: 52, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/507497-570-814/", title: "Saia Godê Estampada", description: "Saia godê com estampa floral, leve e fluida.", price: 119.99 },
        { id: 53, idCategory: 3, image: "https://www.lancaperfume.com.br/saia-super-midi-justa-502sa002485/p", title: "Calça Legging Preta", description: "Calça legging básica, ideal para atividades físicas ou uso casual.", price: 59.99 },
        { id: 54, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/543961-570-814/", title: "Saia Envelope", description: "Saia envelope ajustável, com amarração lateral.", price: 109.99 },
        { id: 55, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/506171-570-814/", title: "Calça Jeans Boyfriend", description: "Calça jeans boyfriend com modelagem solta e confortável.", price: 149.99 },
        { id: 56, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/541802-570-814/", title: "Saia de Tule", description: "Saia de tule, leve e delicada, ideal para eventos especiais.", price: 139.99 },
        { id: 57, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/541895-570-814/", title: "Calça Clochard", description: "Calça clochard de cintura alta com amarração na cintura.", price: 159.99 },
        { id: 58, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/541956-570-814/", title: "Saia Midi Justa", description: "Saia midi justa ao corpo, com tecido canelado.", price: 99.99 },
        { id: 59, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/539561-570-814/", title: "Calça Pantacourt", description: "Calça pantacourt com corte moderno e confortável.", price: 129.99 },
        { id: 60, idCategory: 3, image: "https://lojalancaperfume.vteximg.com.br/arquivos/ids/462980-570-814/", title: "Saia Evasê", description: "Saia evasê com caimento leve, ideal para o dia a dia.", price: 89.99 },
        { id: 61, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58447469-1600-auto?v=638436775807330000&width=1600&height=auto&aspect=true", title: "Jaqueta Jeans Oversized", description: "Jaqueta jeans oversized com lavagem clara, estilo casual e moderno.", price: 199.99 },
        { id: 62, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58951019-1600-auto?v=638602802839370000&width=1600&height=auto&aspect=true", title: "Casaco de Lã Batida", description: "Casaco de lã batida, elegante e perfeito para o inverno.", price: 249.99 },
        { id: 63, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58948842-1600-auto?v=638602753646500000&width=1600&height=auto&aspect=true", title: "Jaqueta de Couro Sintético", description: "Jaqueta de couro sintético com zíper, ideal para um look descolado.", price: 189.99 },
        { id: 64, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58455159-1600-auto?v=638441373733230000&width=1600&height=auto&aspect=true", title: "Casaco Trench Coat", description: "Trench coat clássico, ideal para dias chuvosos e estilos formais.", price: 299.99 },
        { id: 65, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/53335115-1600-auto?v=638265182108470000&width=1600&height=auto&aspect=true", title: "Jaqueta Puffer Feminina", description: "Jaqueta puffer acolchoada, perfeita para dias frios.", price: 229.99 },
        { id: 66, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/57254341-1600-auto?v=638143179826200000&width=1600&height=auto&aspect=true", title: "Blazer Estruturado", description: "Blazer feminino estruturado, ideal para o ambiente de trabalho.", price: 189.99 },
        { id: 67, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58629281-1600-auto?v=638508863244430000&width=1600&height=auto&aspect=true", title: "Jaqueta Bomber Estampada", description: "Jaqueta bomber com estampa moderna, estilo casual.", price: 149.99 },
        { id: 68, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58447397-1600-auto?v=638436270511000000&width=1600&height=auto&aspect=true", title: "Casaco de Tricô Longo", description: "Casaco de tricô alongado, confortável e ideal para dias frios.", price: 169.99 },
        { id: 69, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58457586-1600-auto?v=638442484864170000&width=1600&height=auto&aspect=true", title: "Jaqueta Varsity", description: "Jaqueta estilo varsity, com detalhes em couro sintético.", price: 199.99 },
        { id: 70, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58645362-1600-auto?v=638513229151500000&width=1600&height=auto&aspect=true", title: "Casaco de Pelo Sintético", description: "Casaco com acabamento de pelo sintético, elegante e aconchegante.", price: 279.99 },
        { id: 71, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58615454-1600-auto?v=638506253879800000&width=1600&height=auto&aspect=true", title: "Blazer Xadrez", description: "Blazer xadrez com corte reto, perfeito para um look casual chic.", price: 169.99 },
        { id: 72, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58518737-1600-auto?v=638477574582700000&width=1600&height=auto&aspect=true", title: "Jaqueta de Veludo", description: "Jaqueta de veludo cotelê, ideal para dias frios com estilo.", price: 189.99 },
        { id: 73, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58447673-1600-auto?v=638436844564570000&width=1600&height=auto&aspect=true", title: "Casaco Parka Feminino", description: "Parka feminina com capuz removível e bolsos utilitários.", price: 229.99 },
        { id: 74, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58530754-1600-auto?v=638483515471430000&width=1600&height=auto&aspect=true", title: "Blazer de Linho", description: "Blazer de linho leve, ideal para looks de verão elegantes.", price: 199.99 },
        { id: 75, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/57417090-1600-auto?v=638187327768370000&width=1600&height=auto&aspect=true", title: "Jaqueta Militar", description: "Jaqueta estilo militar com bolsos utilitários, prática e estilosa.", price: 179.99 },
        { id: 76, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58861259-1600-auto?v=638574411508430000&width=1600&height=auto&aspect=true", title: "Casaco Impermeável", description: "Casaco impermeável, ideal para dias de chuva.", price: 259.99 },
        { id: 77, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58232117-1600-auto?v=638340120808370000&width=1600&height=auto&aspect=true", title: "Jaqueta de Moletom com Capuz", description: "Jaqueta de moletom com capuz, confortável para o dia a dia.", price: 119.99 },
        { id: 78, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58861183-1600-auto?v=638574407514100000&width=1600&height=auto&aspect=true", title: "Blazer Feminino Acinturado", description: "Blazer acinturado com corte elegante e sofisticado.", price: 209.99 },
        { id: 79, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/53893684-1600-auto?v=637849661594330000&width=1600&height=auto&aspect=true", title: "Jaqueta Esportiva", description: "Jaqueta esportiva leve, ideal para atividades ao ar livre.", price: 139.99 },
        { id: 80, idCategory: 4, image: "https://cea.vtexassets.com/arquivos/ids/58652916-1600-auto?v=638514823290370000&width=1600&height=auto&aspect=true", title: "Casaco Peacoat", description: "Casaco peacoat com botões duplos, estilo clássico e elegante.", price: 269.99 },
        { id: 81, idCategory: 5, image: "https://img.lojasrenner.com.br/item/927733120/original/1.jpg", title: "Vestido Midi Floral", description: "Vestido midi com estampa floral, ideal para eventos casuais.", price: 149.99 },
        { id: 82, idCategory: 5, image: "https://img.lojasrenner.com.br/item/896480481/original/3.jpg", title: "Vestido Longo de Renda", description: "Vestido longo com detalhes em renda, elegante para ocasiões especiais.", price: 249.99 },
        { id: 83, idCategory: 5, image: "https://img.lojasrenner.com.br/item/927441637/original/3.jpg", title: "Vestido Tubinho Preto", description: "Vestido tubinho preto básico, ajustado ao corpo, ideal para eventos formais.", price: 129.99 },
        { id: 84, idCategory: 5, image: "https://img.lojasrenner.com.br/item/927732936/original/3.jpg", title: "Vestido Envelope Estampado", description: "Vestido envelope com estampa tropical, leve e confortável.", price: 139.99 },
        { id: 85, idCategory: 5, image: "https://img.lojasrenner.com.br/item/927050855/original/3.jpg", title: "Vestido de Cetim", description: "Vestido de cetim acetinado, sofisticado para eventos noturnos.", price: 189.99 },
        { id: 86, idCategory: 5, image: "https://img.lojasrenner.com.br/item/927739855/original/3.jpg", title: "Vestido Jeans Curto", description: "Vestido jeans curto com bolsos, casual e moderno.", price: 109.99 },
        { id: 87, idCategory: 5, image: "https://img.lojasrenner.com.br/item/883908708/original/3.jpg", title: "Vestido Ciganinha", description: "Vestido estilo ciganinha com ombro de fora e babados.", price: 119.99 },
        { id: 88, idCategory: 5, image: "https://img.lojasrenner.com.br/item/927733146/original/3.jpg", title: "Vestido de Tricô", description: "Vestido de tricô ajustado ao corpo, ideal para dias mais frios.", price: 159.99 },
        { id: 89, idCategory: 5, image: "https://img.lojasrenner.com.br/item/914509612/original/3.jpg", title: "Vestido Godê de Poá", description: "Vestido godê com estampa de poá, retrô e charmoso.", price: 129.99 },
        { id: 90, idCategory: 5, image: "https://img.lojasrenner.com.br/item/928002530/original/3.jpg", title: "Vestido Longo de Malha", description: "Vestido longo de malha com alças finas, ideal para o verão.", price: 119.99 },
        
        { id: 91, idCategory: 5, image: "https://img.lojasrenner.com.br/item/927085177/original/3.jpg", title: "Vestido Slip Dress", description: "Slip dress de cetim, minimalista e elegante.", price: 179.99 },
        { id: 92, idCategory: 5, image: "https://img.lojasrenner.com.br/item/928053513/original/3.jpg", title: "Vestido Peplum", description: "Vestido peplum com babado na cintura, elegante para eventos formais.", price: 159.99 },
        { id: 93, idCategory: 5, image: "https://img.lojasrenner.com.br/item/928386431/original/3.jpg", title: "Vestido Longo Boho", description: "Vestido longo boho com estampa étnica, leve e fluido.", price: 149.99 },
        { id: 94, idCategory: 5, image: "https://img.lojasrenner.com.br/item/928386297/original/3.jpg", title: "Vestido Curto de Paetês", description: "Vestido curto coberto de paetês, perfeito para festas.", price: 229.99 },
        { id: 95, idCategory: 5, image: "https://img.lojasrenner.com.br/item/895277991/original/3.jpg", title: "Vestido de Linho", description: "Vestido de linho com botões frontais, ideal para looks de verão.", price: 179.99 },
        { id: 96, idCategory: 5, image: "https://img.lojasrenner.com.br/item/626395180/original/1.jpg", title: "Vestido Rodado Floral", description: "Vestido rodado com estampa floral delicada, ideal para eventos diurnos.", price: 139.99 },
        { id: 97, idCategory: 5, image: "https://img.lojasrenner.com.br/item/922850562/original/3.jpg", title: "Vestido de Alça Fina", description: "Vestido curto com alça fina, casual e fresco.", price: 109.99 },
        { id: 98, idCategory: 5, image: "https://img.lojasrenner.com.br/item/928064079/original/3.jpg", title: "Vestido de Festa Longo", description: "Vestido de festa longo com detalhes em pedraria.", price: 299.99 },



    ]

}