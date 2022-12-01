<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0" name="viewport" />
    <title>Login de Administradores | Sem Limites</title>
    <link rel="shortcut icon" type="image/x-icon" href="../icons/icon-tab-03.svg">
    <link rel="stylesheet" href="../css/admin-login.css">
</head>
<body>

<section>
    <div class="site-logo">
        <a href="../../index.php">
                <svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 500 246.7" style="enable-background:new 0 0 500 246.7;" xml:space="preserve">
            <style type="text/css">
                .st0{fill-rule:evenodd;clip-rule:evenodd;}
                .st1{enable-background:new    ;}
            </style>
            <title>Prancheta 3</title>
            <g>
                <g id="Logo">
                    <g id="_2849156474848">
                        <polygon class="st0" points="294.4,41.5 250,104.1 282.4,4.9 			"/>
                        <polygon class="st0" points="205.6,41.6 250,104.1 217.6,4.9 			"/>
                        <polygon class="st0" points="262.1,29.5 249.9,12.6 237.9,29.5 237.9,29.5 249.9,66.1 			"/>
                    </g>
                </g>
            <g class="st1">
                <path d="M29.4,172.2c6.6,0,11.9,1.9,15.8,5.7c3.9,3.8,5.8,9.1,5.8,15.9v26.5c0,6.8-2,12.1-5.8,15.9c-3.9,3.8-9.2,5.7-15.8,5.7
                    c-6.5,0-11.7-1.8-15.6-5.4c-3.8-3.6-5.9-8.8-6.1-15.5l13.2-5.8v4.6c0,3.5,0.8,6.1,2.3,7.7c1.5,1.6,3.6,2.5,6.1,2.5
                    c2.5,0,4.6-0.8,6.1-2.5c1.5-1.6,2.3-4.2,2.3-7.7v-25.4c0-3.5-0.8-6.1-2.3-7.7c-1.5-1.6-3.6-2.5-6.1-2.5c-6.6,0-11.9-1.9-15.8-5.7
                    c-3.9-3.8-5.8-9.1-5.8-15.9v-18.4c0-6.8,1.9-12.1,5.8-15.9c3.9-3.8,9.2-5.7,15.8-5.7c6.5,0,11.7,1.8,15.6,5.5
                    c3.9,3.7,5.9,8.8,6,15.4l-13.2,6v-4.6c0-3.6-0.8-6.3-2.3-7.9c-1.5-1.6-3.6-2.5-6.1-2.5c-2.5,0-4.6,0.8-6.1,2.5
                    c-1.5,1.7-2.3,4.3-2.3,8v17.1c0,3.6,0.8,6.3,2.3,7.9C24.8,171.4,26.8,172.2,29.4,172.2z"/>
                <path d="M72.9,228.7h23v11.9H59.6V123.7h36.3v11.9h-23v36.3h18.9l-4.6,12.3H72.9V228.7z"/>
                <path d="M159.8,123.7v116.9h-13.2V157l-14.5,35.2L117.7,157v83.6h-13.2V123.7h0.2h13.1l14.4,37.1l14.5-37.1H159.8z"/>
                <path d="M199.7,240.6V123.7H213v105h21.7v11.9H199.7z"/>
                <path d="M256.4,123.7v116.9h-13.2V123.7H256.4z"/>
                <path d="M320.4,123.7v116.9h-13.2V157l-14.5,35.2L278.3,157v83.6H265V123.7h0.2h13.1l14.4,37.1l14.5-37.1H320.4z"/>
                <path d="M342.4,123.7v116.9h-13.2V123.7H342.4z"/>
                <path d="M395.5,123.7v11.9h-15.6v105h-13.2v-105H351v-11.9H395.5z"/>
                <path d="M417.3,228.7h23v11.9h-36.3V123.7h36.3v11.9h-23v36.3h18.9l-4.6,12.3h-14.3V228.7z"/>
                <path d="M470.6,172.2c6.6,0,11.9,1.9,15.8,5.7c3.9,3.8,5.8,9.1,5.8,15.9v26.5c0,6.8-1.9,12.1-5.8,15.9c-3.9,3.8-9.2,5.7-15.8,5.7
                    c-6.5,0-11.7-1.8-15.6-5.4c-3.8-3.6-5.9-8.8-6.1-15.5l13.2-5.8v4.6c0,3.5,0.8,6.1,2.3,7.7c1.5,1.6,3.6,2.5,6.1,2.5
                    c2.5,0,4.6-0.8,6.1-2.5c1.5-1.6,2.3-4.2,2.3-7.7v-25.4c0-3.5-0.8-6.1-2.3-7.7c-1.5-1.6-3.6-2.5-6.1-2.5c-6.6,0-11.9-1.9-15.8-5.7
                    c-3.9-3.8-5.8-9.1-5.8-15.9v-18.4c0-6.8,1.9-12.1,5.8-15.9c3.9-3.8,9.2-5.7,15.8-5.7c6.5,0,11.7,1.8,15.6,5.5
                    c3.9,3.7,5.9,8.8,6,15.4l-13.2,6v-4.6c0-3.6-0.8-6.3-2.3-7.9c-1.5-1.6-3.6-2.5-6.1-2.5c-2.5,0-4.6,0.8-6.1,2.5
                    c-1.5,1.7-2.3,4.3-2.3,8v17.1c0,3.6,0.8,6.3,2.3,7.9C466.1,171.4,468.1,172.2,470.6,172.2z"/>
            </g>
        </g>
        </svg>
        </a>
    </div>

    <span>FAÇA LOGIN COMO ADMINISTRADOR PARA CONTINUAR</span>

    <div class="admin-form">
        <form action="../php/validate-admin.php" method="POST">
            <label for="admin-email">EMAIL:</label>
            <input type="email" name="admin-email" id="admin-email" maxlength="70">
            <br>
            <br>
            <label for="admin-senha">SENHA:</label>
            <input type="password" name="admin-senha" id="admin-senha" maxlength="32">

            <input type="submit" value="ACESSAR">

        </form>
    </div>
</section>
    
</body>
</html>