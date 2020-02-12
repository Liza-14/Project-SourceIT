class Expense {
  constructor(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = Number(value);
  }

 render(){
    return `
      <li class="expense-item" data-type='exp' data-id='${this.id}'>
        <span class="span-description">${this.description}</span>
        <div>
          <span class="span-value">${this.value}</span>
          <button class="btn btn-delete" id="btn-delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          </button>
        </div>
      </li>
    `;
  }
}
export default Expense;