// login teste
// email: estabelecimentoteste@teste.com - senha: 12345
// establishmentId: 6282eeda848b25673d1ac9b5

export default{
    data: () => ({
        login: {}
    }),
    methods:{
        async sendLogin(){
            const resp = await this.API.establishment.login(this.login)
            if(resp.statusCode == 200){
                this.$toasted.global.success({ msg: resp.message });
                localStorage.setItem('establishmentId', resp.establishmentId)
                this.$router.push('/')
                return
            }
            this.$toasted.global.error({ msg: 'Dados inválidos' });
        }
    }
}