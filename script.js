const btn = document.querySelector('.btn')
let areaResult = document.querySelector('#resultado')
const cpfInput = document.querySelector('#idcpf')

class gerarCpf {
    
    constructor(inputValue){
        this.onzeDigitos= inputValue
        this.cpfGerado = Array.from(this.onzeDigitos.slice(0,-2))
    }

    gerarDigito(){
        this.cpfGerado = Array.from(this.cpfGerado)
        let rep = this.cpfGerado.length +1
        const somaArray = this.cpfGerado.reduce((ac,valor)=>{
            ac = rep * valor + ac
            rep --
            return ac
        },0)

        let proximoDigito = 11 - (somaArray % 11)
        if(proximoDigito >=10){
            proximoDigito = '0'
        }
        
        this.cpfGerado =this.cpfGerado.join('') + proximoDigito
        return this.cpfGerado
    }

    cpfNovo(){
        this.gerarDigito()
        const cpfNovoGerado = this.gerarDigito()
        return(cpfNovoGerado);   
    }

    validaSequencia(){
        const sequencia = this.onzeDigitos[0].repeat(11)
        return this.onzeDigitos === sequencia
    }

    validaCpf(){
        if(this.validaSequencia()) return 'O cpf é uma sequência,portanto, inválido.'
        if(this.onzeDigitos.length != 11) return 'Preencha com 11 Números.'
        if(this.cpfNovo() != this.onzeDigitos)return 'Cpf Inválido.'
        return 'cpf válido.'
    }
}

btn.addEventListener('click',()=>{
    const cpf1 = new gerarCpf(cpfInput.value)
    areaResult.innerHTML = cpf1.validaCpf()
})