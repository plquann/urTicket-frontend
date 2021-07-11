export const selectedIndex = (selected, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      return newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      return newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      return newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      return newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    
}