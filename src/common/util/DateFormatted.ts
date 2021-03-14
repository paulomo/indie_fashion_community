export function getDateWithDashSeperator(date: Date): string {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    if (dd < 10) {
      dd = Number('0') + dd;
    }

    if (mm < 10) {
      mm = Number('0') + mm;
    }
    return dd + '-' + mm + '-' + yyyy;
} 

export function getDateWithSlashSeperator(date: Date): string {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = Number('0') + dd;
  }

  if (mm < 10) {
    mm = Number('0') + mm;
  }

  const today = dd + '/' + mm + '/' + yyyy;
  return today;
} 