using System;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            #region hackerrank

            SocketMerchant res = new SocketMerchant();
            Console.WriteLine("Matching pairs of socks is " + res.SocketMerchantMethod());

            #endregion
        }
    }
}
