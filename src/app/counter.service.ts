export class CounterService{
    private activeToggleCount : number = 0;
    private inactiveToggleCount : number = 0;

    onToggleActive(){
        this.activeToggleCount++;
        console.log(this.activeToggleCount)
    }
    
    onToggleInactive(){
        this.inactiveToggleCount++;
        console.log(this.inactiveToggleCount);
    }
}