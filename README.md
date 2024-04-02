# HASH TABLE DSA

| NO. | questions                                                                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     | **type of questions**                                                                                                                                                   |
|  1  |[ What-is Hash Table](#)                                                                                                                                                 |
|  2  |[How-is-hash-table-implemented](#)                                                                                                                                       |
|  3  |[Types-of-hash-table](#)                                                                                                                                                 |
|  4  |[Advantage-of-hash-table](#)                                                                                                                                             |
|  5  |[Hash-table-usage](#)                                                                                                                                                    |








|  1. |[ What-is Hash Table](#)

# 1. Hash table

<p> HASH TABLE and it usages familiar to Arrays  </p> 

![what-is-hash-table](./whatishashtable/image1.png)

# 1.1 Hash table

![what-is-hash-table](./whatishashtable/image2.png)


|  2. |[How-is-hash-table-implemented](#)

# 2. Hash table implemented
<p> suppose if we assume HT[TOYOTA]= 20 HT[TESLA]= 40 </p>
<P> |0  | 1 |  2| 3 | 4  | 5 | 6 | 7 | 8 |  => is the size of the  HASH table and HASH("TOYOTA")=> 3, HASH("TESLA") => 5, are the size of the Hash  </P>

<p> we declare values to 'HASH" by HT[TOTOTA]= 20  => | 0 | 1 | 2  | 3 | 4  | 5 | 6 | 7 | 8 | </p>
<P> NOW HASH("TOYOTA") =>3  value HT[TOYOTA]= 20                          | - | - | 20 | - | -  | - | - | - | - | </P>
<P> Now HASH("TESLA") =>5                             | - | - |  - | - | -  | 40| - | - | - | </P>
<p>Has table have its determestick nature, far a give field it will always gives the same output </p>
<p> Now HASH ("MARUTHI")= 5 MULTIBLE VALUES AT SAME FIELD IS CALLED COLLISION TECHNICS </p>
<P> what will happen the value is 78 which is not in hash table then we will take 'MODULO" VALUE is called 78 % 9  => 6 is the remender value</P>
<p> n % m <_ m-1 which tells about  </p> 
<p >better to AVIOD  collisuion </p>
<p> HASH ("toyato") => 78 % 9 => 6 </p> is called collision</p>p
<p> HASH ("Tesla")  => 51 % 9 => 6 </p>
<p>Incase of collision, we need to apply collision resolvation technics </p>
  
![what-is-hash-table-implemented](./Howishashtableimplemented/image1.png)


