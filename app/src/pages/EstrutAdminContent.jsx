function EstrutAdminContent(){
    return (
        <div id="contentAbout">
            <header className="entry-header">
                <h1 className="entry-title">Introdução:</h1>
            </header>
            <div id="conteudoMapa">
                O Sistema SEI subdivide a estrutura municipal em Unidades, as Unidades SEI são espaços no sistema que representam os departamentos e equipes da Prefeitura Municipal de Jaraguá do Sul.
            </div>

            <header className="entry-header">
                <h1 className="entry-title">Siglas das Unidades:</h1>
            </header>
            <div id="conteudoMapa">
                As siglas das unidades foram definidas de forma que seja possível identificar qual a Secretaria, Diretoria, Gerencia ou Chefia localizada na estrutura Hierárquica. Sendo ela definida com o seguinte padrão:
            <br /><br />
            SXXXXX - DXXX - GXXX - CXXX - ASSXXX<br />
            [Secretaria] - [Diretoria] - [Gerência] - [Chefia] - [Assessoria]
            <br /><br />
            Exemplo:<br />
            SEMAD.DGEP.GADP.CFOP<br />
            Secretaria da Administração → Diretoria de Gestão de Pessoas → Gerência de Administração de Pessoal → Chefia de Folha de Pagamento
            </div>

            <header className="entry-header">
            <h1 className="entry-title">Numeração das Unidades</h1>
            </header>
            <div id="conteudoMapa">
            A numeração das unidades SEI tem uma composição de 14 números em 7 níveis, sendo os dois primeiros números correspondentes a secretaria e o restante os níveis dentro da secretaria:
            <br /><br />
            <font color="#06B6D4">99</font>-<font color="#F59E0B">99</font>-<font color="#10B981">99</font>-<font color="#8B5CF6">99</font>-<font color="#1A202C">99</font><br />
            <font color="#06B6D4">[00-99] - Secretarias</font><br />
            <font color="#F59E0B">[00-99] - Diretorias</font><br />
            <font color="#10B981">[00-99] - Gerências</font><br />
            <font color="#8B5CF6">[00-99] - Chefias</font><br />
            <font color="#1A202C">[00-99] - Demais Sub-unidades</font><br />
            <br /><br />
            Exemplo:<br />
            <font color="#06B6D4">01</font><font color="#F59E0B">01</font><font color="#10B981">00</font><font color="#8B5CF6">00</font><font color="#1A202C">00</font> - Chefia de Gabinete (GABPREF/GABVICE)
            </div>

            <header className="entry-header">
            <h1 className="entry-title">Estrutura completa</h1> 
            </header>
            <div id="conteudoMapa">
            Você pode conferir a Estrutura Organizacional completa do SEI para a Prefeitura de Jaraguá do Sul cliando 
                <a href="https://chill-partner-c3f.notion.site/Estrutura-Administrativa-dfab2dd0ec3c4aa4bec8b8bebd063aa3" target="_blank">aqui</a>
            </div><br /><br />

        </div>
    )
}

export default EstrutAdminContent