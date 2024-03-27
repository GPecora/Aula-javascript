        // document.getElementById()
        const elemento1 = document.getElementById("exemplo1");
        console.log(elemento1.textContent); // Saída: Este é um exemplo de div com ID

        // document.getElementsByTagName()
        const itens = document.getElementsByTagName("li");
        for (let i = 0; i < itens.length; i++) {
            console.log(itens[i].textContent); // Saída: Item 1, Item 2, Item 3
        }

        // document.getElementsByClassName()
        const elementos2 = document.getElementsByClassName("exemplo2");
        for (let i = 0; i < elementos2.length; i++) {
            console.log(elementos2[i].textContent); // Saída: Elemento 1, Elemento 2, Elemento 3
        }

        // document.querySelector()
        const elemento3 = document.querySelector(".exemplo2");
        console.log(elemento3.textContent); // Saída: Elemento 1

        // document.querySelectorAll()
        const elementos4 = document.querySelectorAll("ul li");
        elementos4.forEach(item => {
            console.log(item.textContent); // Saída: Item 1, Item 2, Item 3
        });

        // Agora, abaixo estão os comentários explicando cada função:   

        //document.getElementById():
        //Esta função retorna o elemento HTML que possui o ID especificado.
        //No exemplo colocado, um elemento <div> com o ID "exemplo1" é selecionado.
        //Em seguida, o texto dentro desse elemento é ilustrado no console.
        
        //document.getElementsByTagName():
        //Esta função retorna uma coleção de elementos com o nome da tag especificada.
        //No exemplo, uma lista <ul> com vários itens <li> é selecionada.
        //Um loop é usado para percorrer cada item <li> na lista e exibir o texto de cada item no console.
        
        //document.getElementsByClassName():
        //Esta função retorna uma coleção de elementos que possuem a classe especificada.
        //No exemplo, elementos <div> com a classe "exemplo2" são selecionados.
        //Um loop é usado para percorrer cada elemento <div> e exibir o texto de cada um no console.
        
        //document.querySelector():
        //Esta função retorna o primeiro elemento dentro do documento que corresponde ao seletor CSS especificado.
        //No exemplo, o primeiro elemento <div> com a classe "exemplo2" é selecionado.
        //Em seguida, o texto dentro desse elemento é exibido no console.
        
        //document.querySelectorAll():
        //Esta função retorna todos os elementos dentro do documento que correspondem ao seletor CSS especificado, em uma NodeList.
        //No exemplo, todos os itens <li> dentro de uma lista <ul> são selecionados.
        //forEach() é usado para iterar sobre todos os itens selecionados e exibir o texto de cada um no console.