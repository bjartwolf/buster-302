"use strict";
buster.testCase("The ViewModel", {
    "setUp": function () {
        this.vm = new ReservationsViewModel();
    },
    "total sum should be zero when initialized": function () {
        assert.same(this.vm.totalSurcharge(), 0);
    },
    "total number of seats should be two": function () {
        assert.same(this.vm.seats().length, 2);
    },
    "after adding a seat there should be three seats": function () {
        this.vm.addSeat();
        assert.same(this.vm.seats().length, 3);
    },
    "after remoivng a seat there should be one seat left": function () {
        var seatToRemove = this.vm.seats()[0];
        this.vm.removeSeat(seatToRemove);
        assert.same(this.vm.seats().length, 1);
    },
    "if an attendee chooses Ultimate option total price should be 290": function () {
        this.vm.seats()[0].meal(this.vm.availableMeals[2]);
        assert.same(this.vm.totalSurcharge(), 290);
    },
    "if both attendees choose Ultimate option total price should be twice 290": function () {
        var twoTimes290 = 290 * 2;
        this.vm.seats()[0].meal(this.vm.availableMeals[2]);
        this.vm.seats()[1].meal(this.vm.availableMeals[2]);
        assert.same(this.vm.totalSurcharge(), twoTimes290);
    }
});
