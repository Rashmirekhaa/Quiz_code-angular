import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'convertToSpace'
})

export class CovertToSpacesPipe  implements PipeTransform{
    transform(value:string, character:string):string {
        return '';
    }

}