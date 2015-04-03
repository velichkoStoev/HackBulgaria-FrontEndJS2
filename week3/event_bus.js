var bus = (function(){
    var events = {};

    return {
        on: function(eventName, callback){
            events[eventName] = callback;
        },
        remove: function(eventName){
            if(events[eventName]){
                delete events[eventName];
            }
        },
        trigger: function(eventName){
            events[eventName]();
        }
    }
})();

// var bus = new EventBus();
bus.on("PANIC_EVENT", function() {
    console.log("PANIC_EVENT HAPPENED!")
});

bus.trigger("PANIC_EVENT");