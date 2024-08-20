function formInscricao() {
  var formEmail = document.getElementById("formEmail").value;

  if (formEmail === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Email não pode ser vazio!",
    });
    return false;
  } else if (!emailValido(formEmail)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Email inválido!",
    });
    return false;
  } else {
    Swal.fire({
      icon: "success",
      title: "Email cadastrado com sucesso!",
      text: "Você receberá novidades em seu email!",
    });

    return true;
  }
}

function emailValido(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function sairFunction() {
  Swal.fire({
    icon: "warning",
    title: "Você deseja sair?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Sim`,
    denyButtonText: `Não`,
    showCancelButton: false,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Algum problema no sistema!", "", "warning");
    } else if (result.isDenied) {
      Swal.fire("Você ainda está conectado!", "", "info");
    }
  });
}
