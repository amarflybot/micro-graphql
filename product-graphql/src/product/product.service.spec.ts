import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return Products ByUser Id', () => {
    service.create({
      id: 1,
      price: '123123.12',
      name: 'mango'
    })
    service.create({
      id: 2,
      price: '12123.12',
      name: 'grape'
    })
    service.create({
      id: 3,
      price: '123.12',
      name: 'orange'
    })
    service.buy({
      productId: 1,
      buyerId: 1
    })
    service.buy({
      productId: 2,
      buyerId: 1
    })

    const findProductsByUserId = service.findProductsByUserId(1);
    console.log({findProductsByUserId})
  });
});
