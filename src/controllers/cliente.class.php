<?php
require('connection.php');

$nome = filter_input(INPUT_POST, 'client-name');
$sobrenome = filter_input(INPUT_POST, 'client-lastname');
$email = filter_input(INPUT_POST, 'client-email', FILTER_VALIDATE_EMAIL);
$senha = filter_input(INPUT_POST, 'client-password');
$cpf = filter_input(INPUT_POST, 'client-cpf', FILTER_SANITIZE_NUMBER_FLOAT);
$ddd = filter_input(INPUT_POST, 'client-ddd');
$telefone = filter_input(INPUT_POST, 'client-number');
$rua = filter_input(INPUT_POST, 'client-street');
$n_casa = filter_input(INPUT_POST, 'client-numhouse');
$bairro = filter_input(INPUT_POST, 'client-bairro');
$pix = filter_input(INPUT_POST, 'client-pix');
$tipo = "C";

if($email != ""){
    $stmt = $pdo->prepare("SELECT * FROM usuario WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    
    if($stmt->rowCount() > 0) {
        header("Location: ../website/user/continue-register.php");
    } else {
        if($nome && $sobrenome && $email && $senha && $cpf && $ddd && $telefone && $rua && $n_casa && $bairro != ""){
            $stmt = $pdo->prepare("INSERT INTO usuario (nome,sobrenome,email,cpf,ddd,telefone,senha,rua,n_casa,frete,tipo,pix) VALUES (:nome,:sobrenome,:email,:cpf,:ddd,:telefone,:senha,:rua,:n_casa,:frete,:tipo,:pix)");
            $stmt->bindParam(':nome', $nome);
            $stmt->bindParam(':sobrenome', $sobrenome);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':cpf', $cpf);
            $stmt->bindParam(':ddd', $ddd);
            $stmt->bindParam(':telefone', $telefone);
            $stmt->bindParam(':senha', $senha);
            $stmt->bindParam(':rua', $rua);
            $stmt->bindParam(':n_casa', $n_casa);
            $stmt->bindParam(':frete', $bairro);
            $stmt->bindParam(':tipo', $tipo);
            $stmt->bindParam(':pix', $pix);
            $stmt->execute();

            echo "
            <script>
            alert('CADASTRADO REALIZADO COM SUCESSO');
            location.href='../../index.php';
            </script>";
        } else {
            echo "ERRO AO ADICIONAR INFORMAÇÕES NA TABELA CLIENTE";
    }
    }
}

