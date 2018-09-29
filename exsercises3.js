var nama = 'NINA'
var peran = 'KSATRIA'

if (nama == '' && peran == ''){
  console.log('nama harus di isi!')
}
if (nama == 'Mikael' &&  peran == ''){
  console.log ('Halo ' + nama + ' ' + ' ,Pilih peranmu untuk memulai game!');
}
if (nama == 'NINA' && peran == 'KSATRIA'){
  console.log ("Selamat datang di Dunia Proxytia,"+ nama);
  console.log("Halo " + peran + " " + nama + ', kamu dapat menyerang dengan senjatamu!');
}
else if (nama == 'DANU' && peran == 'TABIB'){
  console.log("Selamat datang di Dunia Proxytia " + nama)
  console.log ("Halo " + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.')
}
else if (nama == 'ZERO' && peran == 'PENYIHIR'){
  console.log ("Selamat datang di Dunia Proxytia, " + nama)
  console.log ("Halo ," + peran + ' '  + nama + ' ' +',ciptakan keajaiban yang membantu kemenanganmu!')
}

