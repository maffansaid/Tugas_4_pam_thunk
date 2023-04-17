let tempat = ['Papua', 'Jawa', 'Kalimantan', 'Sulawesi', 'Papus', 'NTT', 'NTB'];
let jenisPesawat = ['Batik Air', 'Garuda', 'Speedis', 'Jet'];
let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
let hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
function makeData (x) {
  return {
    id: x + 1,
    asal: tempat[Math.floor(Math.random() * tempat.length)],
    tujuan: tempat[Math.floor(Math.random() * tempat.length)],
    maskapai: jenisPesawat[Math.floor(Math.random() * jenisPesawat.length)],
    waktu: bulan[Math.floor(Math.random() * bulan.length)] + ' ' + String(Math.floor(Math.random() * 30) + 1) + ', 2023. ' + hari[Math.floor(Math.random() * hari.length)],
  };
}

const initialState={
 value: []
};

export const counterReducer=(state=initialState, action)=>{
 console.log(state)
 switch(action.type){
  case "INCREASE":
    (Math.floor(Math.random() * 2) == 1) ? state.value.unshift(makeData(state.value.length)) : state.value.push(makeData(state.value.length));
    return {state, value: state.value};
  case "DECREASE":
    (Math.floor(Math.random() * 2) == 1) ? state.value.shift() : state.value.pop();
    return {state, value: state.value};
  case "MODIFY":
    if (state.value.length != 0) {
      const index = Math.floor(Math.random() * state.value.length);
      state.value[index] = makeData(index);
    }
    return {state, value: state.value};
  default:
   return state; 
 }
};
