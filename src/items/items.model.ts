import { CreateItemDto } from './dto/create-item.dto';

export interface Item extends CreateItemDto {
  id: string;
  status: 'ON_SALE' | 'SOLD_OUT';
}
