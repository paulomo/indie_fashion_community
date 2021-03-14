import { uuid } from 'uuidv4';
import Identifier from './Identifier';

export default class Guid extends Identifier< string | number > {
    constructor(id?: string | number) {
        super(id ? id : uuid())
    }
}