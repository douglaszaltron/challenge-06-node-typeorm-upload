import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRepository.find({ where: { id } });

    if (transaction) {
      await transactionsRepository.remove(transaction);
    } else {
      throw new AppError('Regiter not found', 400);
    }
  }
}

export default DeleteTransactionService;
