import { cn, color, text } from '../../styles/theme';
import { useTransactionContext } from './TransactionProvider';
import type { TransactionSponsorReact } from '../types';

export function TransactionSponsor({
  className,
  text: sponsorName,
}: TransactionSponsorReact) {
  const { status } = useTransactionContext();
  if (status !== 'idle') {
    return null;
  }

  return (
    <div className={cn(text.label2, 'flex', className)}>
      <p className={color.foregroundMuted}>Free gas</p>
      {!!sponsorName && (
        <div className="flex">
          <p className={cn(color.foregroundMuted, 'pl-2')}>•</p>
          <p className={cn(color.foregroundMuted, 'pl-2')}>
            Sponsored by{' '}
            <span className={cn(text.label1, color.primary)}>
              {sponsorName}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}