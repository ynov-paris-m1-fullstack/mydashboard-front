import StatCard from "@/components/StatCard/index";
import { fetchGraphql } from "@/services/fetchGraphql";
import { GET_SALES_FOR_TABLE } from "@/graphql/queries/sale";
import { GET_STATS } from "@/graphql/queries/stat";
import styles from "./page.module.scss";
export default async function Home() {

  const stats = await fetchGraphql({ resolver: GET_STATS });
  const { sales } = await fetchGraphql({
    resolver: GET_SALES_FOR_TABLE,
    variables: { limit: 5 }
  });

  const salesIcon = '<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.94644 4.81816H19.0089C19.1732 4.81809 19.3373 4.82851 19.5002 4.84937C19.445 4.46167 19.3118 4.08917 19.1088 3.75433C18.9057 3.41949 18.6369 3.12925 18.3186 2.9011C18.0003 2.67294 17.6391 2.51161 17.2568 2.42683C16.8745 2.34204 16.4789 2.33556 16.094 2.40776L4.52895 4.38223H4.51577C3.78983 4.52105 3.14427 4.93178 2.71094 5.53052C3.36379 5.06616 4.14529 4.81713 4.94644 4.81816Z" fill = "white" /><path d="M19.009 5.87488H4.94653C4.20086 5.87569 3.48596 6.17227 2.95869 6.69954C2.43142 7.22681 2.13485 7.94171 2.13403 8.68738V17.1249C2.13485 17.8705 2.43142 18.5854 2.95869 19.1127C3.48596 19.64 4.20086 19.9366 4.94653 19.9374H19.009C19.7547 19.9366 20.4696 19.64 20.9969 19.1127C21.5241 18.5854 21.8207 17.8705 21.8215 17.1249V8.68738C21.8207 7.94171 21.5241 7.22681 20.9969 6.69954C20.4696 6.17227 19.7547 5.87569 19.009 5.87488ZM16.9216 14.3124C16.6435 14.3124 16.3716 14.2299 16.1404 14.0754C15.9091 13.9209 15.7289 13.7012 15.6224 13.4443C15.516 13.1873 15.4881 12.9046 15.5424 12.6318C15.5967 12.359 15.7306 12.1084 15.9273 11.9118C16.1239 11.7151 16.3745 11.5812 16.6473 11.5269C16.9201 11.4726 17.2028 11.5005 17.4598 11.6069C17.7167 11.7134 17.9364 11.8936 18.0909 12.1249C18.2454 12.3561 18.3279 12.628 18.3279 12.9061C18.3279 13.2791 18.1797 13.6368 17.916 13.9005C17.6523 14.1642 17.2946 14.3124 16.9216 14.3124Z" fill="white"/><path d="M2.15601 11.6514V7.27881C2.15601 6.32651 2.68335 4.72998 4.51367 4.38413C6.06714 4.09277 7.60522 4.09277 7.60522 4.09277C7.60522 4.09277 8.61597 4.7959 7.781 4.7959C6.94604 4.7959 6.96802 5.87256 7.781 5.87256C8.59399 5.87256 7.781 6.90527 7.781 6.90527L4.50708 10.6187L2.15601 11.6514Z" fill="white"/></svg >';

  return (
    <>
    <div className={styles.stats__grid}>
      <StatCard label="Total sales" value={stats.getStats.totalSales} icon={salesIcon} />
      <StatCard label="Quantities sold" value={stats.getStats.totalQuantity} icon={salesIcon} />
      <StatCard label="Total order" value={stats.getStats.totalOrder} icon={salesIcon} />
      <StatCard label="Average sales" value={stats.getStats.averageSaleAmount} icon={salesIcon} />
      </div>
      <div className={styles.invoice__table}>
        {
          sales.map((sale) => (
            <div key={sale.saleId}>
              <span>{sale.saleDate}</span>
              <span>{sale.totalRevenue}</span>
            </div>
          ))
        }
      </div>
    </>
  );
}
