import {CanActivate , Injectable , ExecutionContext} from '@nestjs/common'
@Injectable()
export class AuthR implements CanActivate{

    canActivate(context:ExecutionContext):boolean{

        const request = context.switchToHttp().getRequest()
        console.log(request.user);
        
        if(!request.user) return false

        return true

    }

}