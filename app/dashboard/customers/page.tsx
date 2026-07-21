import type { Metadata } from 'next';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const params = await searchParams;
  const query = params?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Customers</h1>
      </div>

      <div className="mt-4 mb-6">
        <Search placeholder="Search customers..." />
      </div>

      <Table customers={customers} />
    </div>
  );
}