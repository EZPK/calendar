let calendar = {
    date: new Date(),
    selected: function() {
        this.cells = $('.cell');
        this.cell = [];
        for (var i = 0; i < this.cells.length; i++) {
            this.cell = this.cells[i];
            // console.log(this.cell);
            this.card = this.cell.childNodes[1];
            console.log(this.card);
            this.card.add('div');
        }
    },
}
calendar.selected();
