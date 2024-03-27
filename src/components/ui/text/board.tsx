import generateDate from '@utils/generateDate';
import React from 'react';

interface DateProps {
   date: string;
   className?: string;
}

export function Date({ date, className }: DateProps) {
   return <p className={`${className}`}>{generateDate(date)}</p>;
}
