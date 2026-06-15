
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BulkRequest
 * 
 */
export type BulkRequest = $Result.DefaultSelection<Prisma.$BulkRequestPayload>
/**
 * Model BulkRequestItem
 * 
 */
export type BulkRequestItem = $Result.DefaultSelection<Prisma.$BulkRequestItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RequestStatus: {
  queued: 'queued',
  processing: 'processing',
  done: 'done'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const ItemStatus: {
  queued: 'queued',
  processing: 'processing',
  done: 'done',
  failed: 'failed'
};

export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus]

}

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type ItemStatus = $Enums.ItemStatus

export const ItemStatus: typeof $Enums.ItemStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BulkRequests
 * const bulkRequests = await prisma.bulkRequest.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BulkRequests
   * const bulkRequests = await prisma.bulkRequest.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bulkRequest`: Exposes CRUD operations for the **BulkRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BulkRequests
    * const bulkRequests = await prisma.bulkRequest.findMany()
    * ```
    */
  get bulkRequest(): Prisma.BulkRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bulkRequestItem`: Exposes CRUD operations for the **BulkRequestItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BulkRequestItems
    * const bulkRequestItems = await prisma.bulkRequestItem.findMany()
    * ```
    */
  get bulkRequestItem(): Prisma.BulkRequestItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BulkRequest: 'BulkRequest',
    BulkRequestItem: 'BulkRequestItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bulkRequest" | "bulkRequestItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BulkRequest: {
        payload: Prisma.$BulkRequestPayload<ExtArgs>
        fields: Prisma.BulkRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BulkRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BulkRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestPayload>
          }
          findFirst: {
            args: Prisma.BulkRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BulkRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestPayload>
          }
          findMany: {
            args: Prisma.BulkRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestPayload>[]
          }
          create: {
            args: Prisma.BulkRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestPayload>
          }
          createMany: {
            args: Prisma.BulkRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BulkRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestPayload>[]
          }
          delete: {
            args: Prisma.BulkRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestPayload>
          }
          update: {
            args: Prisma.BulkRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestPayload>
          }
          deleteMany: {
            args: Prisma.BulkRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BulkRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BulkRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestPayload>[]
          }
          upsert: {
            args: Prisma.BulkRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestPayload>
          }
          aggregate: {
            args: Prisma.BulkRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBulkRequest>
          }
          groupBy: {
            args: Prisma.BulkRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<BulkRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.BulkRequestCountArgs<ExtArgs>
            result: $Utils.Optional<BulkRequestCountAggregateOutputType> | number
          }
        }
      }
      BulkRequestItem: {
        payload: Prisma.$BulkRequestItemPayload<ExtArgs>
        fields: Prisma.BulkRequestItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BulkRequestItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BulkRequestItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestItemPayload>
          }
          findFirst: {
            args: Prisma.BulkRequestItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BulkRequestItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestItemPayload>
          }
          findMany: {
            args: Prisma.BulkRequestItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestItemPayload>[]
          }
          create: {
            args: Prisma.BulkRequestItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestItemPayload>
          }
          createMany: {
            args: Prisma.BulkRequestItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BulkRequestItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestItemPayload>[]
          }
          delete: {
            args: Prisma.BulkRequestItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestItemPayload>
          }
          update: {
            args: Prisma.BulkRequestItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestItemPayload>
          }
          deleteMany: {
            args: Prisma.BulkRequestItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BulkRequestItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BulkRequestItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestItemPayload>[]
          }
          upsert: {
            args: Prisma.BulkRequestItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkRequestItemPayload>
          }
          aggregate: {
            args: Prisma.BulkRequestItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBulkRequestItem>
          }
          groupBy: {
            args: Prisma.BulkRequestItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BulkRequestItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BulkRequestItemCountArgs<ExtArgs>
            result: $Utils.Optional<BulkRequestItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bulkRequest?: BulkRequestOmit
    bulkRequestItem?: BulkRequestItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BulkRequestCountOutputType
   */

  export type BulkRequestCountOutputType = {
    items: number
  }

  export type BulkRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | BulkRequestCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * BulkRequestCountOutputType without action
   */
  export type BulkRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestCountOutputType
     */
    select?: BulkRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BulkRequestCountOutputType without action
   */
  export type BulkRequestCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulkRequestItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BulkRequest
   */

  export type AggregateBulkRequest = {
    _count: BulkRequestCountAggregateOutputType | null
    _avg: BulkRequestAvgAggregateOutputType | null
    _sum: BulkRequestSumAggregateOutputType | null
    _min: BulkRequestMinAggregateOutputType | null
    _max: BulkRequestMaxAggregateOutputType | null
  }

  export type BulkRequestAvgAggregateOutputType = {
    totalCount: number | null
    processedCount: number | null
    successCount: number | null
    failedCount: number | null
  }

  export type BulkRequestSumAggregateOutputType = {
    totalCount: number | null
    processedCount: number | null
    successCount: number | null
    failedCount: number | null
  }

  export type BulkRequestMinAggregateOutputType = {
    id: string | null
    remoteBaseUrl: string | null
    fallbackStoreId: string | null
    status: $Enums.RequestStatus | null
    totalCount: number | null
    processedCount: number | null
    successCount: number | null
    failedCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BulkRequestMaxAggregateOutputType = {
    id: string | null
    remoteBaseUrl: string | null
    fallbackStoreId: string | null
    status: $Enums.RequestStatus | null
    totalCount: number | null
    processedCount: number | null
    successCount: number | null
    failedCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BulkRequestCountAggregateOutputType = {
    id: number
    remoteBaseUrl: number
    fallbackStoreId: number
    status: number
    totalCount: number
    processedCount: number
    successCount: number
    failedCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BulkRequestAvgAggregateInputType = {
    totalCount?: true
    processedCount?: true
    successCount?: true
    failedCount?: true
  }

  export type BulkRequestSumAggregateInputType = {
    totalCount?: true
    processedCount?: true
    successCount?: true
    failedCount?: true
  }

  export type BulkRequestMinAggregateInputType = {
    id?: true
    remoteBaseUrl?: true
    fallbackStoreId?: true
    status?: true
    totalCount?: true
    processedCount?: true
    successCount?: true
    failedCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BulkRequestMaxAggregateInputType = {
    id?: true
    remoteBaseUrl?: true
    fallbackStoreId?: true
    status?: true
    totalCount?: true
    processedCount?: true
    successCount?: true
    failedCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BulkRequestCountAggregateInputType = {
    id?: true
    remoteBaseUrl?: true
    fallbackStoreId?: true
    status?: true
    totalCount?: true
    processedCount?: true
    successCount?: true
    failedCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BulkRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulkRequest to aggregate.
     */
    where?: BulkRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkRequests to fetch.
     */
    orderBy?: BulkRequestOrderByWithRelationInput | BulkRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BulkRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BulkRequests
    **/
    _count?: true | BulkRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BulkRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BulkRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BulkRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BulkRequestMaxAggregateInputType
  }

  export type GetBulkRequestAggregateType<T extends BulkRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateBulkRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBulkRequest[P]>
      : GetScalarType<T[P], AggregateBulkRequest[P]>
  }




  export type BulkRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulkRequestWhereInput
    orderBy?: BulkRequestOrderByWithAggregationInput | BulkRequestOrderByWithAggregationInput[]
    by: BulkRequestScalarFieldEnum[] | BulkRequestScalarFieldEnum
    having?: BulkRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BulkRequestCountAggregateInputType | true
    _avg?: BulkRequestAvgAggregateInputType
    _sum?: BulkRequestSumAggregateInputType
    _min?: BulkRequestMinAggregateInputType
    _max?: BulkRequestMaxAggregateInputType
  }

  export type BulkRequestGroupByOutputType = {
    id: string
    remoteBaseUrl: string
    fallbackStoreId: string | null
    status: $Enums.RequestStatus
    totalCount: number
    processedCount: number
    successCount: number
    failedCount: number
    createdAt: Date
    updatedAt: Date
    _count: BulkRequestCountAggregateOutputType | null
    _avg: BulkRequestAvgAggregateOutputType | null
    _sum: BulkRequestSumAggregateOutputType | null
    _min: BulkRequestMinAggregateOutputType | null
    _max: BulkRequestMaxAggregateOutputType | null
  }

  type GetBulkRequestGroupByPayload<T extends BulkRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BulkRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BulkRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BulkRequestGroupByOutputType[P]>
            : GetScalarType<T[P], BulkRequestGroupByOutputType[P]>
        }
      >
    >


  export type BulkRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    remoteBaseUrl?: boolean
    fallbackStoreId?: boolean
    status?: boolean
    totalCount?: boolean
    processedCount?: boolean
    successCount?: boolean
    failedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | BulkRequest$itemsArgs<ExtArgs>
    _count?: boolean | BulkRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulkRequest"]>

  export type BulkRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    remoteBaseUrl?: boolean
    fallbackStoreId?: boolean
    status?: boolean
    totalCount?: boolean
    processedCount?: boolean
    successCount?: boolean
    failedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bulkRequest"]>

  export type BulkRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    remoteBaseUrl?: boolean
    fallbackStoreId?: boolean
    status?: boolean
    totalCount?: boolean
    processedCount?: boolean
    successCount?: boolean
    failedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bulkRequest"]>

  export type BulkRequestSelectScalar = {
    id?: boolean
    remoteBaseUrl?: boolean
    fallbackStoreId?: boolean
    status?: boolean
    totalCount?: boolean
    processedCount?: boolean
    successCount?: boolean
    failedCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BulkRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "remoteBaseUrl" | "fallbackStoreId" | "status" | "totalCount" | "processedCount" | "successCount" | "failedCount" | "createdAt" | "updatedAt", ExtArgs["result"]["bulkRequest"]>
  export type BulkRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | BulkRequest$itemsArgs<ExtArgs>
    _count?: boolean | BulkRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BulkRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BulkRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BulkRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BulkRequest"
    objects: {
      items: Prisma.$BulkRequestItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      remoteBaseUrl: string
      fallbackStoreId: string | null
      status: $Enums.RequestStatus
      totalCount: number
      processedCount: number
      successCount: number
      failedCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bulkRequest"]>
    composites: {}
  }

  type BulkRequestGetPayload<S extends boolean | null | undefined | BulkRequestDefaultArgs> = $Result.GetResult<Prisma.$BulkRequestPayload, S>

  type BulkRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BulkRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BulkRequestCountAggregateInputType | true
    }

  export interface BulkRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BulkRequest'], meta: { name: 'BulkRequest' } }
    /**
     * Find zero or one BulkRequest that matches the filter.
     * @param {BulkRequestFindUniqueArgs} args - Arguments to find a BulkRequest
     * @example
     * // Get one BulkRequest
     * const bulkRequest = await prisma.bulkRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BulkRequestFindUniqueArgs>(args: SelectSubset<T, BulkRequestFindUniqueArgs<ExtArgs>>): Prisma__BulkRequestClient<$Result.GetResult<Prisma.$BulkRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BulkRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BulkRequestFindUniqueOrThrowArgs} args - Arguments to find a BulkRequest
     * @example
     * // Get one BulkRequest
     * const bulkRequest = await prisma.bulkRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BulkRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, BulkRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BulkRequestClient<$Result.GetResult<Prisma.$BulkRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulkRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestFindFirstArgs} args - Arguments to find a BulkRequest
     * @example
     * // Get one BulkRequest
     * const bulkRequest = await prisma.bulkRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BulkRequestFindFirstArgs>(args?: SelectSubset<T, BulkRequestFindFirstArgs<ExtArgs>>): Prisma__BulkRequestClient<$Result.GetResult<Prisma.$BulkRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulkRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestFindFirstOrThrowArgs} args - Arguments to find a BulkRequest
     * @example
     * // Get one BulkRequest
     * const bulkRequest = await prisma.bulkRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BulkRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, BulkRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__BulkRequestClient<$Result.GetResult<Prisma.$BulkRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BulkRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BulkRequests
     * const bulkRequests = await prisma.bulkRequest.findMany()
     * 
     * // Get first 10 BulkRequests
     * const bulkRequests = await prisma.bulkRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bulkRequestWithIdOnly = await prisma.bulkRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BulkRequestFindManyArgs>(args?: SelectSubset<T, BulkRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BulkRequest.
     * @param {BulkRequestCreateArgs} args - Arguments to create a BulkRequest.
     * @example
     * // Create one BulkRequest
     * const BulkRequest = await prisma.bulkRequest.create({
     *   data: {
     *     // ... data to create a BulkRequest
     *   }
     * })
     * 
     */
    create<T extends BulkRequestCreateArgs>(args: SelectSubset<T, BulkRequestCreateArgs<ExtArgs>>): Prisma__BulkRequestClient<$Result.GetResult<Prisma.$BulkRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BulkRequests.
     * @param {BulkRequestCreateManyArgs} args - Arguments to create many BulkRequests.
     * @example
     * // Create many BulkRequests
     * const bulkRequest = await prisma.bulkRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BulkRequestCreateManyArgs>(args?: SelectSubset<T, BulkRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BulkRequests and returns the data saved in the database.
     * @param {BulkRequestCreateManyAndReturnArgs} args - Arguments to create many BulkRequests.
     * @example
     * // Create many BulkRequests
     * const bulkRequest = await prisma.bulkRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BulkRequests and only return the `id`
     * const bulkRequestWithIdOnly = await prisma.bulkRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BulkRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, BulkRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BulkRequest.
     * @param {BulkRequestDeleteArgs} args - Arguments to delete one BulkRequest.
     * @example
     * // Delete one BulkRequest
     * const BulkRequest = await prisma.bulkRequest.delete({
     *   where: {
     *     // ... filter to delete one BulkRequest
     *   }
     * })
     * 
     */
    delete<T extends BulkRequestDeleteArgs>(args: SelectSubset<T, BulkRequestDeleteArgs<ExtArgs>>): Prisma__BulkRequestClient<$Result.GetResult<Prisma.$BulkRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BulkRequest.
     * @param {BulkRequestUpdateArgs} args - Arguments to update one BulkRequest.
     * @example
     * // Update one BulkRequest
     * const bulkRequest = await prisma.bulkRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BulkRequestUpdateArgs>(args: SelectSubset<T, BulkRequestUpdateArgs<ExtArgs>>): Prisma__BulkRequestClient<$Result.GetResult<Prisma.$BulkRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BulkRequests.
     * @param {BulkRequestDeleteManyArgs} args - Arguments to filter BulkRequests to delete.
     * @example
     * // Delete a few BulkRequests
     * const { count } = await prisma.bulkRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BulkRequestDeleteManyArgs>(args?: SelectSubset<T, BulkRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulkRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BulkRequests
     * const bulkRequest = await prisma.bulkRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BulkRequestUpdateManyArgs>(args: SelectSubset<T, BulkRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulkRequests and returns the data updated in the database.
     * @param {BulkRequestUpdateManyAndReturnArgs} args - Arguments to update many BulkRequests.
     * @example
     * // Update many BulkRequests
     * const bulkRequest = await prisma.bulkRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BulkRequests and only return the `id`
     * const bulkRequestWithIdOnly = await prisma.bulkRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BulkRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, BulkRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BulkRequest.
     * @param {BulkRequestUpsertArgs} args - Arguments to update or create a BulkRequest.
     * @example
     * // Update or create a BulkRequest
     * const bulkRequest = await prisma.bulkRequest.upsert({
     *   create: {
     *     // ... data to create a BulkRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BulkRequest we want to update
     *   }
     * })
     */
    upsert<T extends BulkRequestUpsertArgs>(args: SelectSubset<T, BulkRequestUpsertArgs<ExtArgs>>): Prisma__BulkRequestClient<$Result.GetResult<Prisma.$BulkRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BulkRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestCountArgs} args - Arguments to filter BulkRequests to count.
     * @example
     * // Count the number of BulkRequests
     * const count = await prisma.bulkRequest.count({
     *   where: {
     *     // ... the filter for the BulkRequests we want to count
     *   }
     * })
    **/
    count<T extends BulkRequestCountArgs>(
      args?: Subset<T, BulkRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BulkRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BulkRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BulkRequestAggregateArgs>(args: Subset<T, BulkRequestAggregateArgs>): Prisma.PrismaPromise<GetBulkRequestAggregateType<T>>

    /**
     * Group by BulkRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BulkRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BulkRequestGroupByArgs['orderBy'] }
        : { orderBy?: BulkRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BulkRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBulkRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BulkRequest model
   */
  readonly fields: BulkRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BulkRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BulkRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends BulkRequest$itemsArgs<ExtArgs> = {}>(args?: Subset<T, BulkRequest$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkRequestItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BulkRequest model
   */
  interface BulkRequestFieldRefs {
    readonly id: FieldRef<"BulkRequest", 'String'>
    readonly remoteBaseUrl: FieldRef<"BulkRequest", 'String'>
    readonly fallbackStoreId: FieldRef<"BulkRequest", 'String'>
    readonly status: FieldRef<"BulkRequest", 'RequestStatus'>
    readonly totalCount: FieldRef<"BulkRequest", 'Int'>
    readonly processedCount: FieldRef<"BulkRequest", 'Int'>
    readonly successCount: FieldRef<"BulkRequest", 'Int'>
    readonly failedCount: FieldRef<"BulkRequest", 'Int'>
    readonly createdAt: FieldRef<"BulkRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"BulkRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BulkRequest findUnique
   */
  export type BulkRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequest
     */
    select?: BulkRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequest
     */
    omit?: BulkRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestInclude<ExtArgs> | null
    /**
     * Filter, which BulkRequest to fetch.
     */
    where: BulkRequestWhereUniqueInput
  }

  /**
   * BulkRequest findUniqueOrThrow
   */
  export type BulkRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequest
     */
    select?: BulkRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequest
     */
    omit?: BulkRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestInclude<ExtArgs> | null
    /**
     * Filter, which BulkRequest to fetch.
     */
    where: BulkRequestWhereUniqueInput
  }

  /**
   * BulkRequest findFirst
   */
  export type BulkRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequest
     */
    select?: BulkRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequest
     */
    omit?: BulkRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestInclude<ExtArgs> | null
    /**
     * Filter, which BulkRequest to fetch.
     */
    where?: BulkRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkRequests to fetch.
     */
    orderBy?: BulkRequestOrderByWithRelationInput | BulkRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulkRequests.
     */
    cursor?: BulkRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulkRequests.
     */
    distinct?: BulkRequestScalarFieldEnum | BulkRequestScalarFieldEnum[]
  }

  /**
   * BulkRequest findFirstOrThrow
   */
  export type BulkRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequest
     */
    select?: BulkRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequest
     */
    omit?: BulkRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestInclude<ExtArgs> | null
    /**
     * Filter, which BulkRequest to fetch.
     */
    where?: BulkRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkRequests to fetch.
     */
    orderBy?: BulkRequestOrderByWithRelationInput | BulkRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulkRequests.
     */
    cursor?: BulkRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulkRequests.
     */
    distinct?: BulkRequestScalarFieldEnum | BulkRequestScalarFieldEnum[]
  }

  /**
   * BulkRequest findMany
   */
  export type BulkRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequest
     */
    select?: BulkRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequest
     */
    omit?: BulkRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestInclude<ExtArgs> | null
    /**
     * Filter, which BulkRequests to fetch.
     */
    where?: BulkRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkRequests to fetch.
     */
    orderBy?: BulkRequestOrderByWithRelationInput | BulkRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BulkRequests.
     */
    cursor?: BulkRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkRequests.
     */
    skip?: number
    distinct?: BulkRequestScalarFieldEnum | BulkRequestScalarFieldEnum[]
  }

  /**
   * BulkRequest create
   */
  export type BulkRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequest
     */
    select?: BulkRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequest
     */
    omit?: BulkRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a BulkRequest.
     */
    data: XOR<BulkRequestCreateInput, BulkRequestUncheckedCreateInput>
  }

  /**
   * BulkRequest createMany
   */
  export type BulkRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BulkRequests.
     */
    data: BulkRequestCreateManyInput | BulkRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BulkRequest createManyAndReturn
   */
  export type BulkRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequest
     */
    select?: BulkRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequest
     */
    omit?: BulkRequestOmit<ExtArgs> | null
    /**
     * The data used to create many BulkRequests.
     */
    data: BulkRequestCreateManyInput | BulkRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BulkRequest update
   */
  export type BulkRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequest
     */
    select?: BulkRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequest
     */
    omit?: BulkRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a BulkRequest.
     */
    data: XOR<BulkRequestUpdateInput, BulkRequestUncheckedUpdateInput>
    /**
     * Choose, which BulkRequest to update.
     */
    where: BulkRequestWhereUniqueInput
  }

  /**
   * BulkRequest updateMany
   */
  export type BulkRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BulkRequests.
     */
    data: XOR<BulkRequestUpdateManyMutationInput, BulkRequestUncheckedUpdateManyInput>
    /**
     * Filter which BulkRequests to update
     */
    where?: BulkRequestWhereInput
    /**
     * Limit how many BulkRequests to update.
     */
    limit?: number
  }

  /**
   * BulkRequest updateManyAndReturn
   */
  export type BulkRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequest
     */
    select?: BulkRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequest
     */
    omit?: BulkRequestOmit<ExtArgs> | null
    /**
     * The data used to update BulkRequests.
     */
    data: XOR<BulkRequestUpdateManyMutationInput, BulkRequestUncheckedUpdateManyInput>
    /**
     * Filter which BulkRequests to update
     */
    where?: BulkRequestWhereInput
    /**
     * Limit how many BulkRequests to update.
     */
    limit?: number
  }

  /**
   * BulkRequest upsert
   */
  export type BulkRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequest
     */
    select?: BulkRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequest
     */
    omit?: BulkRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the BulkRequest to update in case it exists.
     */
    where: BulkRequestWhereUniqueInput
    /**
     * In case the BulkRequest found by the `where` argument doesn't exist, create a new BulkRequest with this data.
     */
    create: XOR<BulkRequestCreateInput, BulkRequestUncheckedCreateInput>
    /**
     * In case the BulkRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BulkRequestUpdateInput, BulkRequestUncheckedUpdateInput>
  }

  /**
   * BulkRequest delete
   */
  export type BulkRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequest
     */
    select?: BulkRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequest
     */
    omit?: BulkRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestInclude<ExtArgs> | null
    /**
     * Filter which BulkRequest to delete.
     */
    where: BulkRequestWhereUniqueInput
  }

  /**
   * BulkRequest deleteMany
   */
  export type BulkRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulkRequests to delete
     */
    where?: BulkRequestWhereInput
    /**
     * Limit how many BulkRequests to delete.
     */
    limit?: number
  }

  /**
   * BulkRequest.items
   */
  export type BulkRequest$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestItem
     */
    select?: BulkRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequestItem
     */
    omit?: BulkRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestItemInclude<ExtArgs> | null
    where?: BulkRequestItemWhereInput
    orderBy?: BulkRequestItemOrderByWithRelationInput | BulkRequestItemOrderByWithRelationInput[]
    cursor?: BulkRequestItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BulkRequestItemScalarFieldEnum | BulkRequestItemScalarFieldEnum[]
  }

  /**
   * BulkRequest without action
   */
  export type BulkRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequest
     */
    select?: BulkRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequest
     */
    omit?: BulkRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestInclude<ExtArgs> | null
  }


  /**
   * Model BulkRequestItem
   */

  export type AggregateBulkRequestItem = {
    _count: BulkRequestItemCountAggregateOutputType | null
    _avg: BulkRequestItemAvgAggregateOutputType | null
    _sum: BulkRequestItemSumAggregateOutputType | null
    _min: BulkRequestItemMinAggregateOutputType | null
    _max: BulkRequestItemMaxAggregateOutputType | null
  }

  export type BulkRequestItemAvgAggregateOutputType = {
    rowNumber: number | null
    shardIndex: number | null
    price: number | null
    attempts: number | null
  }

  export type BulkRequestItemSumAggregateOutputType = {
    rowNumber: number | null
    shardIndex: number | null
    price: number | null
    attempts: number | null
  }

  export type BulkRequestItemMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    rowNumber: number | null
    shardIndex: number | null
    sourceReference: string | null
    paymentRef: string | null
    storeId: string | null
    coffeeType: string | null
    price: number | null
    currency: string | null
    loyaltyCardId: string | null
    status: $Enums.ItemStatus | null
    attempts: number | null
    remotePaymentId: string | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BulkRequestItemMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    rowNumber: number | null
    shardIndex: number | null
    sourceReference: string | null
    paymentRef: string | null
    storeId: string | null
    coffeeType: string | null
    price: number | null
    currency: string | null
    loyaltyCardId: string | null
    status: $Enums.ItemStatus | null
    attempts: number | null
    remotePaymentId: string | null
    error: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BulkRequestItemCountAggregateOutputType = {
    id: number
    requestId: number
    rowNumber: number
    shardIndex: number
    sourceReference: number
    paymentRef: number
    storeId: number
    coffeeType: number
    price: number
    currency: number
    loyaltyCardId: number
    status: number
    attempts: number
    remotePaymentId: number
    error: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BulkRequestItemAvgAggregateInputType = {
    rowNumber?: true
    shardIndex?: true
    price?: true
    attempts?: true
  }

  export type BulkRequestItemSumAggregateInputType = {
    rowNumber?: true
    shardIndex?: true
    price?: true
    attempts?: true
  }

  export type BulkRequestItemMinAggregateInputType = {
    id?: true
    requestId?: true
    rowNumber?: true
    shardIndex?: true
    sourceReference?: true
    paymentRef?: true
    storeId?: true
    coffeeType?: true
    price?: true
    currency?: true
    loyaltyCardId?: true
    status?: true
    attempts?: true
    remotePaymentId?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BulkRequestItemMaxAggregateInputType = {
    id?: true
    requestId?: true
    rowNumber?: true
    shardIndex?: true
    sourceReference?: true
    paymentRef?: true
    storeId?: true
    coffeeType?: true
    price?: true
    currency?: true
    loyaltyCardId?: true
    status?: true
    attempts?: true
    remotePaymentId?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BulkRequestItemCountAggregateInputType = {
    id?: true
    requestId?: true
    rowNumber?: true
    shardIndex?: true
    sourceReference?: true
    paymentRef?: true
    storeId?: true
    coffeeType?: true
    price?: true
    currency?: true
    loyaltyCardId?: true
    status?: true
    attempts?: true
    remotePaymentId?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BulkRequestItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulkRequestItem to aggregate.
     */
    where?: BulkRequestItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkRequestItems to fetch.
     */
    orderBy?: BulkRequestItemOrderByWithRelationInput | BulkRequestItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BulkRequestItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkRequestItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkRequestItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BulkRequestItems
    **/
    _count?: true | BulkRequestItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BulkRequestItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BulkRequestItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BulkRequestItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BulkRequestItemMaxAggregateInputType
  }

  export type GetBulkRequestItemAggregateType<T extends BulkRequestItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBulkRequestItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBulkRequestItem[P]>
      : GetScalarType<T[P], AggregateBulkRequestItem[P]>
  }




  export type BulkRequestItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulkRequestItemWhereInput
    orderBy?: BulkRequestItemOrderByWithAggregationInput | BulkRequestItemOrderByWithAggregationInput[]
    by: BulkRequestItemScalarFieldEnum[] | BulkRequestItemScalarFieldEnum
    having?: BulkRequestItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BulkRequestItemCountAggregateInputType | true
    _avg?: BulkRequestItemAvgAggregateInputType
    _sum?: BulkRequestItemSumAggregateInputType
    _min?: BulkRequestItemMinAggregateInputType
    _max?: BulkRequestItemMaxAggregateInputType
  }

  export type BulkRequestItemGroupByOutputType = {
    id: string
    requestId: string
    rowNumber: number
    shardIndex: number
    sourceReference: string
    paymentRef: string
    storeId: string
    coffeeType: string
    price: number
    currency: string
    loyaltyCardId: string
    status: $Enums.ItemStatus
    attempts: number
    remotePaymentId: string | null
    error: string | null
    createdAt: Date
    updatedAt: Date
    _count: BulkRequestItemCountAggregateOutputType | null
    _avg: BulkRequestItemAvgAggregateOutputType | null
    _sum: BulkRequestItemSumAggregateOutputType | null
    _min: BulkRequestItemMinAggregateOutputType | null
    _max: BulkRequestItemMaxAggregateOutputType | null
  }

  type GetBulkRequestItemGroupByPayload<T extends BulkRequestItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BulkRequestItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BulkRequestItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BulkRequestItemGroupByOutputType[P]>
            : GetScalarType<T[P], BulkRequestItemGroupByOutputType[P]>
        }
      >
    >


  export type BulkRequestItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    rowNumber?: boolean
    shardIndex?: boolean
    sourceReference?: boolean
    paymentRef?: boolean
    storeId?: boolean
    coffeeType?: boolean
    price?: boolean
    currency?: boolean
    loyaltyCardId?: boolean
    status?: boolean
    attempts?: boolean
    remotePaymentId?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request?: boolean | BulkRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulkRequestItem"]>

  export type BulkRequestItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    rowNumber?: boolean
    shardIndex?: boolean
    sourceReference?: boolean
    paymentRef?: boolean
    storeId?: boolean
    coffeeType?: boolean
    price?: boolean
    currency?: boolean
    loyaltyCardId?: boolean
    status?: boolean
    attempts?: boolean
    remotePaymentId?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request?: boolean | BulkRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulkRequestItem"]>

  export type BulkRequestItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    rowNumber?: boolean
    shardIndex?: boolean
    sourceReference?: boolean
    paymentRef?: boolean
    storeId?: boolean
    coffeeType?: boolean
    price?: boolean
    currency?: boolean
    loyaltyCardId?: boolean
    status?: boolean
    attempts?: boolean
    remotePaymentId?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request?: boolean | BulkRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulkRequestItem"]>

  export type BulkRequestItemSelectScalar = {
    id?: boolean
    requestId?: boolean
    rowNumber?: boolean
    shardIndex?: boolean
    sourceReference?: boolean
    paymentRef?: boolean
    storeId?: boolean
    coffeeType?: boolean
    price?: boolean
    currency?: boolean
    loyaltyCardId?: boolean
    status?: boolean
    attempts?: boolean
    remotePaymentId?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BulkRequestItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "rowNumber" | "shardIndex" | "sourceReference" | "paymentRef" | "storeId" | "coffeeType" | "price" | "currency" | "loyaltyCardId" | "status" | "attempts" | "remotePaymentId" | "error" | "createdAt" | "updatedAt", ExtArgs["result"]["bulkRequestItem"]>
  export type BulkRequestItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | BulkRequestDefaultArgs<ExtArgs>
  }
  export type BulkRequestItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | BulkRequestDefaultArgs<ExtArgs>
  }
  export type BulkRequestItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | BulkRequestDefaultArgs<ExtArgs>
  }

  export type $BulkRequestItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BulkRequestItem"
    objects: {
      request: Prisma.$BulkRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      rowNumber: number
      shardIndex: number
      sourceReference: string
      paymentRef: string
      storeId: string
      coffeeType: string
      price: number
      currency: string
      loyaltyCardId: string
      status: $Enums.ItemStatus
      attempts: number
      remotePaymentId: string | null
      error: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bulkRequestItem"]>
    composites: {}
  }

  type BulkRequestItemGetPayload<S extends boolean | null | undefined | BulkRequestItemDefaultArgs> = $Result.GetResult<Prisma.$BulkRequestItemPayload, S>

  type BulkRequestItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BulkRequestItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BulkRequestItemCountAggregateInputType | true
    }

  export interface BulkRequestItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BulkRequestItem'], meta: { name: 'BulkRequestItem' } }
    /**
     * Find zero or one BulkRequestItem that matches the filter.
     * @param {BulkRequestItemFindUniqueArgs} args - Arguments to find a BulkRequestItem
     * @example
     * // Get one BulkRequestItem
     * const bulkRequestItem = await prisma.bulkRequestItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BulkRequestItemFindUniqueArgs>(args: SelectSubset<T, BulkRequestItemFindUniqueArgs<ExtArgs>>): Prisma__BulkRequestItemClient<$Result.GetResult<Prisma.$BulkRequestItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BulkRequestItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BulkRequestItemFindUniqueOrThrowArgs} args - Arguments to find a BulkRequestItem
     * @example
     * // Get one BulkRequestItem
     * const bulkRequestItem = await prisma.bulkRequestItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BulkRequestItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BulkRequestItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BulkRequestItemClient<$Result.GetResult<Prisma.$BulkRequestItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulkRequestItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestItemFindFirstArgs} args - Arguments to find a BulkRequestItem
     * @example
     * // Get one BulkRequestItem
     * const bulkRequestItem = await prisma.bulkRequestItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BulkRequestItemFindFirstArgs>(args?: SelectSubset<T, BulkRequestItemFindFirstArgs<ExtArgs>>): Prisma__BulkRequestItemClient<$Result.GetResult<Prisma.$BulkRequestItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulkRequestItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestItemFindFirstOrThrowArgs} args - Arguments to find a BulkRequestItem
     * @example
     * // Get one BulkRequestItem
     * const bulkRequestItem = await prisma.bulkRequestItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BulkRequestItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BulkRequestItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BulkRequestItemClient<$Result.GetResult<Prisma.$BulkRequestItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BulkRequestItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BulkRequestItems
     * const bulkRequestItems = await prisma.bulkRequestItem.findMany()
     * 
     * // Get first 10 BulkRequestItems
     * const bulkRequestItems = await prisma.bulkRequestItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bulkRequestItemWithIdOnly = await prisma.bulkRequestItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BulkRequestItemFindManyArgs>(args?: SelectSubset<T, BulkRequestItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkRequestItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BulkRequestItem.
     * @param {BulkRequestItemCreateArgs} args - Arguments to create a BulkRequestItem.
     * @example
     * // Create one BulkRequestItem
     * const BulkRequestItem = await prisma.bulkRequestItem.create({
     *   data: {
     *     // ... data to create a BulkRequestItem
     *   }
     * })
     * 
     */
    create<T extends BulkRequestItemCreateArgs>(args: SelectSubset<T, BulkRequestItemCreateArgs<ExtArgs>>): Prisma__BulkRequestItemClient<$Result.GetResult<Prisma.$BulkRequestItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BulkRequestItems.
     * @param {BulkRequestItemCreateManyArgs} args - Arguments to create many BulkRequestItems.
     * @example
     * // Create many BulkRequestItems
     * const bulkRequestItem = await prisma.bulkRequestItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BulkRequestItemCreateManyArgs>(args?: SelectSubset<T, BulkRequestItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BulkRequestItems and returns the data saved in the database.
     * @param {BulkRequestItemCreateManyAndReturnArgs} args - Arguments to create many BulkRequestItems.
     * @example
     * // Create many BulkRequestItems
     * const bulkRequestItem = await prisma.bulkRequestItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BulkRequestItems and only return the `id`
     * const bulkRequestItemWithIdOnly = await prisma.bulkRequestItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BulkRequestItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BulkRequestItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkRequestItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BulkRequestItem.
     * @param {BulkRequestItemDeleteArgs} args - Arguments to delete one BulkRequestItem.
     * @example
     * // Delete one BulkRequestItem
     * const BulkRequestItem = await prisma.bulkRequestItem.delete({
     *   where: {
     *     // ... filter to delete one BulkRequestItem
     *   }
     * })
     * 
     */
    delete<T extends BulkRequestItemDeleteArgs>(args: SelectSubset<T, BulkRequestItemDeleteArgs<ExtArgs>>): Prisma__BulkRequestItemClient<$Result.GetResult<Prisma.$BulkRequestItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BulkRequestItem.
     * @param {BulkRequestItemUpdateArgs} args - Arguments to update one BulkRequestItem.
     * @example
     * // Update one BulkRequestItem
     * const bulkRequestItem = await prisma.bulkRequestItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BulkRequestItemUpdateArgs>(args: SelectSubset<T, BulkRequestItemUpdateArgs<ExtArgs>>): Prisma__BulkRequestItemClient<$Result.GetResult<Prisma.$BulkRequestItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BulkRequestItems.
     * @param {BulkRequestItemDeleteManyArgs} args - Arguments to filter BulkRequestItems to delete.
     * @example
     * // Delete a few BulkRequestItems
     * const { count } = await prisma.bulkRequestItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BulkRequestItemDeleteManyArgs>(args?: SelectSubset<T, BulkRequestItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulkRequestItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BulkRequestItems
     * const bulkRequestItem = await prisma.bulkRequestItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BulkRequestItemUpdateManyArgs>(args: SelectSubset<T, BulkRequestItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulkRequestItems and returns the data updated in the database.
     * @param {BulkRequestItemUpdateManyAndReturnArgs} args - Arguments to update many BulkRequestItems.
     * @example
     * // Update many BulkRequestItems
     * const bulkRequestItem = await prisma.bulkRequestItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BulkRequestItems and only return the `id`
     * const bulkRequestItemWithIdOnly = await prisma.bulkRequestItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BulkRequestItemUpdateManyAndReturnArgs>(args: SelectSubset<T, BulkRequestItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkRequestItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BulkRequestItem.
     * @param {BulkRequestItemUpsertArgs} args - Arguments to update or create a BulkRequestItem.
     * @example
     * // Update or create a BulkRequestItem
     * const bulkRequestItem = await prisma.bulkRequestItem.upsert({
     *   create: {
     *     // ... data to create a BulkRequestItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BulkRequestItem we want to update
     *   }
     * })
     */
    upsert<T extends BulkRequestItemUpsertArgs>(args: SelectSubset<T, BulkRequestItemUpsertArgs<ExtArgs>>): Prisma__BulkRequestItemClient<$Result.GetResult<Prisma.$BulkRequestItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BulkRequestItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestItemCountArgs} args - Arguments to filter BulkRequestItems to count.
     * @example
     * // Count the number of BulkRequestItems
     * const count = await prisma.bulkRequestItem.count({
     *   where: {
     *     // ... the filter for the BulkRequestItems we want to count
     *   }
     * })
    **/
    count<T extends BulkRequestItemCountArgs>(
      args?: Subset<T, BulkRequestItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BulkRequestItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BulkRequestItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BulkRequestItemAggregateArgs>(args: Subset<T, BulkRequestItemAggregateArgs>): Prisma.PrismaPromise<GetBulkRequestItemAggregateType<T>>

    /**
     * Group by BulkRequestItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkRequestItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BulkRequestItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BulkRequestItemGroupByArgs['orderBy'] }
        : { orderBy?: BulkRequestItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BulkRequestItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBulkRequestItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BulkRequestItem model
   */
  readonly fields: BulkRequestItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BulkRequestItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BulkRequestItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends BulkRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BulkRequestDefaultArgs<ExtArgs>>): Prisma__BulkRequestClient<$Result.GetResult<Prisma.$BulkRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BulkRequestItem model
   */
  interface BulkRequestItemFieldRefs {
    readonly id: FieldRef<"BulkRequestItem", 'String'>
    readonly requestId: FieldRef<"BulkRequestItem", 'String'>
    readonly rowNumber: FieldRef<"BulkRequestItem", 'Int'>
    readonly shardIndex: FieldRef<"BulkRequestItem", 'Int'>
    readonly sourceReference: FieldRef<"BulkRequestItem", 'String'>
    readonly paymentRef: FieldRef<"BulkRequestItem", 'String'>
    readonly storeId: FieldRef<"BulkRequestItem", 'String'>
    readonly coffeeType: FieldRef<"BulkRequestItem", 'String'>
    readonly price: FieldRef<"BulkRequestItem", 'Float'>
    readonly currency: FieldRef<"BulkRequestItem", 'String'>
    readonly loyaltyCardId: FieldRef<"BulkRequestItem", 'String'>
    readonly status: FieldRef<"BulkRequestItem", 'ItemStatus'>
    readonly attempts: FieldRef<"BulkRequestItem", 'Int'>
    readonly remotePaymentId: FieldRef<"BulkRequestItem", 'String'>
    readonly error: FieldRef<"BulkRequestItem", 'String'>
    readonly createdAt: FieldRef<"BulkRequestItem", 'DateTime'>
    readonly updatedAt: FieldRef<"BulkRequestItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BulkRequestItem findUnique
   */
  export type BulkRequestItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestItem
     */
    select?: BulkRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequestItem
     */
    omit?: BulkRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestItemInclude<ExtArgs> | null
    /**
     * Filter, which BulkRequestItem to fetch.
     */
    where: BulkRequestItemWhereUniqueInput
  }

  /**
   * BulkRequestItem findUniqueOrThrow
   */
  export type BulkRequestItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestItem
     */
    select?: BulkRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequestItem
     */
    omit?: BulkRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestItemInclude<ExtArgs> | null
    /**
     * Filter, which BulkRequestItem to fetch.
     */
    where: BulkRequestItemWhereUniqueInput
  }

  /**
   * BulkRequestItem findFirst
   */
  export type BulkRequestItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestItem
     */
    select?: BulkRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequestItem
     */
    omit?: BulkRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestItemInclude<ExtArgs> | null
    /**
     * Filter, which BulkRequestItem to fetch.
     */
    where?: BulkRequestItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkRequestItems to fetch.
     */
    orderBy?: BulkRequestItemOrderByWithRelationInput | BulkRequestItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulkRequestItems.
     */
    cursor?: BulkRequestItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkRequestItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkRequestItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulkRequestItems.
     */
    distinct?: BulkRequestItemScalarFieldEnum | BulkRequestItemScalarFieldEnum[]
  }

  /**
   * BulkRequestItem findFirstOrThrow
   */
  export type BulkRequestItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestItem
     */
    select?: BulkRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequestItem
     */
    omit?: BulkRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestItemInclude<ExtArgs> | null
    /**
     * Filter, which BulkRequestItem to fetch.
     */
    where?: BulkRequestItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkRequestItems to fetch.
     */
    orderBy?: BulkRequestItemOrderByWithRelationInput | BulkRequestItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulkRequestItems.
     */
    cursor?: BulkRequestItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkRequestItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkRequestItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulkRequestItems.
     */
    distinct?: BulkRequestItemScalarFieldEnum | BulkRequestItemScalarFieldEnum[]
  }

  /**
   * BulkRequestItem findMany
   */
  export type BulkRequestItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestItem
     */
    select?: BulkRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequestItem
     */
    omit?: BulkRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestItemInclude<ExtArgs> | null
    /**
     * Filter, which BulkRequestItems to fetch.
     */
    where?: BulkRequestItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkRequestItems to fetch.
     */
    orderBy?: BulkRequestItemOrderByWithRelationInput | BulkRequestItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BulkRequestItems.
     */
    cursor?: BulkRequestItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkRequestItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkRequestItems.
     */
    skip?: number
    distinct?: BulkRequestItemScalarFieldEnum | BulkRequestItemScalarFieldEnum[]
  }

  /**
   * BulkRequestItem create
   */
  export type BulkRequestItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestItem
     */
    select?: BulkRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequestItem
     */
    omit?: BulkRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestItemInclude<ExtArgs> | null
    /**
     * The data needed to create a BulkRequestItem.
     */
    data: XOR<BulkRequestItemCreateInput, BulkRequestItemUncheckedCreateInput>
  }

  /**
   * BulkRequestItem createMany
   */
  export type BulkRequestItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BulkRequestItems.
     */
    data: BulkRequestItemCreateManyInput | BulkRequestItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BulkRequestItem createManyAndReturn
   */
  export type BulkRequestItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestItem
     */
    select?: BulkRequestItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequestItem
     */
    omit?: BulkRequestItemOmit<ExtArgs> | null
    /**
     * The data used to create many BulkRequestItems.
     */
    data: BulkRequestItemCreateManyInput | BulkRequestItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BulkRequestItem update
   */
  export type BulkRequestItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestItem
     */
    select?: BulkRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequestItem
     */
    omit?: BulkRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestItemInclude<ExtArgs> | null
    /**
     * The data needed to update a BulkRequestItem.
     */
    data: XOR<BulkRequestItemUpdateInput, BulkRequestItemUncheckedUpdateInput>
    /**
     * Choose, which BulkRequestItem to update.
     */
    where: BulkRequestItemWhereUniqueInput
  }

  /**
   * BulkRequestItem updateMany
   */
  export type BulkRequestItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BulkRequestItems.
     */
    data: XOR<BulkRequestItemUpdateManyMutationInput, BulkRequestItemUncheckedUpdateManyInput>
    /**
     * Filter which BulkRequestItems to update
     */
    where?: BulkRequestItemWhereInput
    /**
     * Limit how many BulkRequestItems to update.
     */
    limit?: number
  }

  /**
   * BulkRequestItem updateManyAndReturn
   */
  export type BulkRequestItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestItem
     */
    select?: BulkRequestItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequestItem
     */
    omit?: BulkRequestItemOmit<ExtArgs> | null
    /**
     * The data used to update BulkRequestItems.
     */
    data: XOR<BulkRequestItemUpdateManyMutationInput, BulkRequestItemUncheckedUpdateManyInput>
    /**
     * Filter which BulkRequestItems to update
     */
    where?: BulkRequestItemWhereInput
    /**
     * Limit how many BulkRequestItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BulkRequestItem upsert
   */
  export type BulkRequestItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestItem
     */
    select?: BulkRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequestItem
     */
    omit?: BulkRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestItemInclude<ExtArgs> | null
    /**
     * The filter to search for the BulkRequestItem to update in case it exists.
     */
    where: BulkRequestItemWhereUniqueInput
    /**
     * In case the BulkRequestItem found by the `where` argument doesn't exist, create a new BulkRequestItem with this data.
     */
    create: XOR<BulkRequestItemCreateInput, BulkRequestItemUncheckedCreateInput>
    /**
     * In case the BulkRequestItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BulkRequestItemUpdateInput, BulkRequestItemUncheckedUpdateInput>
  }

  /**
   * BulkRequestItem delete
   */
  export type BulkRequestItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestItem
     */
    select?: BulkRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequestItem
     */
    omit?: BulkRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestItemInclude<ExtArgs> | null
    /**
     * Filter which BulkRequestItem to delete.
     */
    where: BulkRequestItemWhereUniqueInput
  }

  /**
   * BulkRequestItem deleteMany
   */
  export type BulkRequestItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulkRequestItems to delete
     */
    where?: BulkRequestItemWhereInput
    /**
     * Limit how many BulkRequestItems to delete.
     */
    limit?: number
  }

  /**
   * BulkRequestItem without action
   */
  export type BulkRequestItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkRequestItem
     */
    select?: BulkRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkRequestItem
     */
    omit?: BulkRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkRequestItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BulkRequestScalarFieldEnum: {
    id: 'id',
    remoteBaseUrl: 'remoteBaseUrl',
    fallbackStoreId: 'fallbackStoreId',
    status: 'status',
    totalCount: 'totalCount',
    processedCount: 'processedCount',
    successCount: 'successCount',
    failedCount: 'failedCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BulkRequestScalarFieldEnum = (typeof BulkRequestScalarFieldEnum)[keyof typeof BulkRequestScalarFieldEnum]


  export const BulkRequestItemScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    rowNumber: 'rowNumber',
    shardIndex: 'shardIndex',
    sourceReference: 'sourceReference',
    paymentRef: 'paymentRef',
    storeId: 'storeId',
    coffeeType: 'coffeeType',
    price: 'price',
    currency: 'currency',
    loyaltyCardId: 'loyaltyCardId',
    status: 'status',
    attempts: 'attempts',
    remotePaymentId: 'remotePaymentId',
    error: 'error',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BulkRequestItemScalarFieldEnum = (typeof BulkRequestItemScalarFieldEnum)[keyof typeof BulkRequestItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ItemStatus'
   */
  export type EnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus'>
    


  /**
   * Reference to a field of type 'ItemStatus[]'
   */
  export type ListEnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type BulkRequestWhereInput = {
    AND?: BulkRequestWhereInput | BulkRequestWhereInput[]
    OR?: BulkRequestWhereInput[]
    NOT?: BulkRequestWhereInput | BulkRequestWhereInput[]
    id?: UuidFilter<"BulkRequest"> | string
    remoteBaseUrl?: StringFilter<"BulkRequest"> | string
    fallbackStoreId?: StringNullableFilter<"BulkRequest"> | string | null
    status?: EnumRequestStatusFilter<"BulkRequest"> | $Enums.RequestStatus
    totalCount?: IntFilter<"BulkRequest"> | number
    processedCount?: IntFilter<"BulkRequest"> | number
    successCount?: IntFilter<"BulkRequest"> | number
    failedCount?: IntFilter<"BulkRequest"> | number
    createdAt?: DateTimeFilter<"BulkRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BulkRequest"> | Date | string
    items?: BulkRequestItemListRelationFilter
  }

  export type BulkRequestOrderByWithRelationInput = {
    id?: SortOrder
    remoteBaseUrl?: SortOrder
    fallbackStoreId?: SortOrderInput | SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    processedCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: BulkRequestItemOrderByRelationAggregateInput
  }

  export type BulkRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BulkRequestWhereInput | BulkRequestWhereInput[]
    OR?: BulkRequestWhereInput[]
    NOT?: BulkRequestWhereInput | BulkRequestWhereInput[]
    remoteBaseUrl?: StringFilter<"BulkRequest"> | string
    fallbackStoreId?: StringNullableFilter<"BulkRequest"> | string | null
    status?: EnumRequestStatusFilter<"BulkRequest"> | $Enums.RequestStatus
    totalCount?: IntFilter<"BulkRequest"> | number
    processedCount?: IntFilter<"BulkRequest"> | number
    successCount?: IntFilter<"BulkRequest"> | number
    failedCount?: IntFilter<"BulkRequest"> | number
    createdAt?: DateTimeFilter<"BulkRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BulkRequest"> | Date | string
    items?: BulkRequestItemListRelationFilter
  }, "id">

  export type BulkRequestOrderByWithAggregationInput = {
    id?: SortOrder
    remoteBaseUrl?: SortOrder
    fallbackStoreId?: SortOrderInput | SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    processedCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BulkRequestCountOrderByAggregateInput
    _avg?: BulkRequestAvgOrderByAggregateInput
    _max?: BulkRequestMaxOrderByAggregateInput
    _min?: BulkRequestMinOrderByAggregateInput
    _sum?: BulkRequestSumOrderByAggregateInput
  }

  export type BulkRequestScalarWhereWithAggregatesInput = {
    AND?: BulkRequestScalarWhereWithAggregatesInput | BulkRequestScalarWhereWithAggregatesInput[]
    OR?: BulkRequestScalarWhereWithAggregatesInput[]
    NOT?: BulkRequestScalarWhereWithAggregatesInput | BulkRequestScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BulkRequest"> | string
    remoteBaseUrl?: StringWithAggregatesFilter<"BulkRequest"> | string
    fallbackStoreId?: StringNullableWithAggregatesFilter<"BulkRequest"> | string | null
    status?: EnumRequestStatusWithAggregatesFilter<"BulkRequest"> | $Enums.RequestStatus
    totalCount?: IntWithAggregatesFilter<"BulkRequest"> | number
    processedCount?: IntWithAggregatesFilter<"BulkRequest"> | number
    successCount?: IntWithAggregatesFilter<"BulkRequest"> | number
    failedCount?: IntWithAggregatesFilter<"BulkRequest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BulkRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BulkRequest"> | Date | string
  }

  export type BulkRequestItemWhereInput = {
    AND?: BulkRequestItemWhereInput | BulkRequestItemWhereInput[]
    OR?: BulkRequestItemWhereInput[]
    NOT?: BulkRequestItemWhereInput | BulkRequestItemWhereInput[]
    id?: UuidFilter<"BulkRequestItem"> | string
    requestId?: UuidFilter<"BulkRequestItem"> | string
    rowNumber?: IntFilter<"BulkRequestItem"> | number
    shardIndex?: IntFilter<"BulkRequestItem"> | number
    sourceReference?: StringFilter<"BulkRequestItem"> | string
    paymentRef?: StringFilter<"BulkRequestItem"> | string
    storeId?: StringFilter<"BulkRequestItem"> | string
    coffeeType?: StringFilter<"BulkRequestItem"> | string
    price?: FloatFilter<"BulkRequestItem"> | number
    currency?: StringFilter<"BulkRequestItem"> | string
    loyaltyCardId?: StringFilter<"BulkRequestItem"> | string
    status?: EnumItemStatusFilter<"BulkRequestItem"> | $Enums.ItemStatus
    attempts?: IntFilter<"BulkRequestItem"> | number
    remotePaymentId?: StringNullableFilter<"BulkRequestItem"> | string | null
    error?: StringNullableFilter<"BulkRequestItem"> | string | null
    createdAt?: DateTimeFilter<"BulkRequestItem"> | Date | string
    updatedAt?: DateTimeFilter<"BulkRequestItem"> | Date | string
    request?: XOR<BulkRequestScalarRelationFilter, BulkRequestWhereInput>
  }

  export type BulkRequestItemOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    rowNumber?: SortOrder
    shardIndex?: SortOrder
    sourceReference?: SortOrder
    paymentRef?: SortOrder
    storeId?: SortOrder
    coffeeType?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    loyaltyCardId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    remotePaymentId?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    request?: BulkRequestOrderByWithRelationInput
  }

  export type BulkRequestItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BulkRequestItemWhereInput | BulkRequestItemWhereInput[]
    OR?: BulkRequestItemWhereInput[]
    NOT?: BulkRequestItemWhereInput | BulkRequestItemWhereInput[]
    requestId?: UuidFilter<"BulkRequestItem"> | string
    rowNumber?: IntFilter<"BulkRequestItem"> | number
    shardIndex?: IntFilter<"BulkRequestItem"> | number
    sourceReference?: StringFilter<"BulkRequestItem"> | string
    paymentRef?: StringFilter<"BulkRequestItem"> | string
    storeId?: StringFilter<"BulkRequestItem"> | string
    coffeeType?: StringFilter<"BulkRequestItem"> | string
    price?: FloatFilter<"BulkRequestItem"> | number
    currency?: StringFilter<"BulkRequestItem"> | string
    loyaltyCardId?: StringFilter<"BulkRequestItem"> | string
    status?: EnumItemStatusFilter<"BulkRequestItem"> | $Enums.ItemStatus
    attempts?: IntFilter<"BulkRequestItem"> | number
    remotePaymentId?: StringNullableFilter<"BulkRequestItem"> | string | null
    error?: StringNullableFilter<"BulkRequestItem"> | string | null
    createdAt?: DateTimeFilter<"BulkRequestItem"> | Date | string
    updatedAt?: DateTimeFilter<"BulkRequestItem"> | Date | string
    request?: XOR<BulkRequestScalarRelationFilter, BulkRequestWhereInput>
  }, "id">

  export type BulkRequestItemOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    rowNumber?: SortOrder
    shardIndex?: SortOrder
    sourceReference?: SortOrder
    paymentRef?: SortOrder
    storeId?: SortOrder
    coffeeType?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    loyaltyCardId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    remotePaymentId?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BulkRequestItemCountOrderByAggregateInput
    _avg?: BulkRequestItemAvgOrderByAggregateInput
    _max?: BulkRequestItemMaxOrderByAggregateInput
    _min?: BulkRequestItemMinOrderByAggregateInput
    _sum?: BulkRequestItemSumOrderByAggregateInput
  }

  export type BulkRequestItemScalarWhereWithAggregatesInput = {
    AND?: BulkRequestItemScalarWhereWithAggregatesInput | BulkRequestItemScalarWhereWithAggregatesInput[]
    OR?: BulkRequestItemScalarWhereWithAggregatesInput[]
    NOT?: BulkRequestItemScalarWhereWithAggregatesInput | BulkRequestItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BulkRequestItem"> | string
    requestId?: UuidWithAggregatesFilter<"BulkRequestItem"> | string
    rowNumber?: IntWithAggregatesFilter<"BulkRequestItem"> | number
    shardIndex?: IntWithAggregatesFilter<"BulkRequestItem"> | number
    sourceReference?: StringWithAggregatesFilter<"BulkRequestItem"> | string
    paymentRef?: StringWithAggregatesFilter<"BulkRequestItem"> | string
    storeId?: StringWithAggregatesFilter<"BulkRequestItem"> | string
    coffeeType?: StringWithAggregatesFilter<"BulkRequestItem"> | string
    price?: FloatWithAggregatesFilter<"BulkRequestItem"> | number
    currency?: StringWithAggregatesFilter<"BulkRequestItem"> | string
    loyaltyCardId?: StringWithAggregatesFilter<"BulkRequestItem"> | string
    status?: EnumItemStatusWithAggregatesFilter<"BulkRequestItem"> | $Enums.ItemStatus
    attempts?: IntWithAggregatesFilter<"BulkRequestItem"> | number
    remotePaymentId?: StringNullableWithAggregatesFilter<"BulkRequestItem"> | string | null
    error?: StringNullableWithAggregatesFilter<"BulkRequestItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BulkRequestItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BulkRequestItem"> | Date | string
  }

  export type BulkRequestCreateInput = {
    id: string
    remoteBaseUrl: string
    fallbackStoreId?: string | null
    status?: $Enums.RequestStatus
    totalCount: number
    processedCount?: number
    successCount?: number
    failedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BulkRequestItemCreateNestedManyWithoutRequestInput
  }

  export type BulkRequestUncheckedCreateInput = {
    id: string
    remoteBaseUrl: string
    fallbackStoreId?: string | null
    status?: $Enums.RequestStatus
    totalCount: number
    processedCount?: number
    successCount?: number
    failedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BulkRequestItemUncheckedCreateNestedManyWithoutRequestInput
  }

  export type BulkRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    remoteBaseUrl?: StringFieldUpdateOperationsInput | string
    fallbackStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    totalCount?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BulkRequestItemUpdateManyWithoutRequestNestedInput
  }

  export type BulkRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    remoteBaseUrl?: StringFieldUpdateOperationsInput | string
    fallbackStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    totalCount?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BulkRequestItemUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type BulkRequestCreateManyInput = {
    id: string
    remoteBaseUrl: string
    fallbackStoreId?: string | null
    status?: $Enums.RequestStatus
    totalCount: number
    processedCount?: number
    successCount?: number
    failedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BulkRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    remoteBaseUrl?: StringFieldUpdateOperationsInput | string
    fallbackStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    totalCount?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulkRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    remoteBaseUrl?: StringFieldUpdateOperationsInput | string
    fallbackStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    totalCount?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulkRequestItemCreateInput = {
    id: string
    rowNumber: number
    shardIndex: number
    sourceReference: string
    paymentRef: string
    storeId: string
    coffeeType: string
    price: number
    currency: string
    loyaltyCardId: string
    status?: $Enums.ItemStatus
    attempts?: number
    remotePaymentId?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    request: BulkRequestCreateNestedOneWithoutItemsInput
  }

  export type BulkRequestItemUncheckedCreateInput = {
    id: string
    requestId: string
    rowNumber: number
    shardIndex: number
    sourceReference: string
    paymentRef: string
    storeId: string
    coffeeType: string
    price: number
    currency: string
    loyaltyCardId: string
    status?: $Enums.ItemStatus
    attempts?: number
    remotePaymentId?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BulkRequestItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    shardIndex?: IntFieldUpdateOperationsInput | number
    sourceReference?: StringFieldUpdateOperationsInput | string
    paymentRef?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    coffeeType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    loyaltyCardId?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    attempts?: IntFieldUpdateOperationsInput | number
    remotePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: BulkRequestUpdateOneRequiredWithoutItemsNestedInput
  }

  export type BulkRequestItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    shardIndex?: IntFieldUpdateOperationsInput | number
    sourceReference?: StringFieldUpdateOperationsInput | string
    paymentRef?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    coffeeType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    loyaltyCardId?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    attempts?: IntFieldUpdateOperationsInput | number
    remotePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulkRequestItemCreateManyInput = {
    id: string
    requestId: string
    rowNumber: number
    shardIndex: number
    sourceReference: string
    paymentRef: string
    storeId: string
    coffeeType: string
    price: number
    currency: string
    loyaltyCardId: string
    status?: $Enums.ItemStatus
    attempts?: number
    remotePaymentId?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BulkRequestItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    shardIndex?: IntFieldUpdateOperationsInput | number
    sourceReference?: StringFieldUpdateOperationsInput | string
    paymentRef?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    coffeeType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    loyaltyCardId?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    attempts?: IntFieldUpdateOperationsInput | number
    remotePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulkRequestItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    shardIndex?: IntFieldUpdateOperationsInput | number
    sourceReference?: StringFieldUpdateOperationsInput | string
    paymentRef?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    coffeeType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    loyaltyCardId?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    attempts?: IntFieldUpdateOperationsInput | number
    remotePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BulkRequestItemListRelationFilter = {
    every?: BulkRequestItemWhereInput
    some?: BulkRequestItemWhereInput
    none?: BulkRequestItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BulkRequestItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BulkRequestCountOrderByAggregateInput = {
    id?: SortOrder
    remoteBaseUrl?: SortOrder
    fallbackStoreId?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    processedCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulkRequestAvgOrderByAggregateInput = {
    totalCount?: SortOrder
    processedCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
  }

  export type BulkRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    remoteBaseUrl?: SortOrder
    fallbackStoreId?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    processedCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulkRequestMinOrderByAggregateInput = {
    id?: SortOrder
    remoteBaseUrl?: SortOrder
    fallbackStoreId?: SortOrder
    status?: SortOrder
    totalCount?: SortOrder
    processedCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulkRequestSumOrderByAggregateInput = {
    totalCount?: SortOrder
    processedCount?: SortOrder
    successCount?: SortOrder
    failedCount?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type BulkRequestScalarRelationFilter = {
    is?: BulkRequestWhereInput
    isNot?: BulkRequestWhereInput
  }

  export type BulkRequestItemCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    rowNumber?: SortOrder
    shardIndex?: SortOrder
    sourceReference?: SortOrder
    paymentRef?: SortOrder
    storeId?: SortOrder
    coffeeType?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    loyaltyCardId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    remotePaymentId?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulkRequestItemAvgOrderByAggregateInput = {
    rowNumber?: SortOrder
    shardIndex?: SortOrder
    price?: SortOrder
    attempts?: SortOrder
  }

  export type BulkRequestItemMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    rowNumber?: SortOrder
    shardIndex?: SortOrder
    sourceReference?: SortOrder
    paymentRef?: SortOrder
    storeId?: SortOrder
    coffeeType?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    loyaltyCardId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    remotePaymentId?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulkRequestItemMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    rowNumber?: SortOrder
    shardIndex?: SortOrder
    sourceReference?: SortOrder
    paymentRef?: SortOrder
    storeId?: SortOrder
    coffeeType?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    loyaltyCardId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    remotePaymentId?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BulkRequestItemSumOrderByAggregateInput = {
    rowNumber?: SortOrder
    shardIndex?: SortOrder
    price?: SortOrder
    attempts?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type BulkRequestItemCreateNestedManyWithoutRequestInput = {
    create?: XOR<BulkRequestItemCreateWithoutRequestInput, BulkRequestItemUncheckedCreateWithoutRequestInput> | BulkRequestItemCreateWithoutRequestInput[] | BulkRequestItemUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: BulkRequestItemCreateOrConnectWithoutRequestInput | BulkRequestItemCreateOrConnectWithoutRequestInput[]
    createMany?: BulkRequestItemCreateManyRequestInputEnvelope
    connect?: BulkRequestItemWhereUniqueInput | BulkRequestItemWhereUniqueInput[]
  }

  export type BulkRequestItemUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<BulkRequestItemCreateWithoutRequestInput, BulkRequestItemUncheckedCreateWithoutRequestInput> | BulkRequestItemCreateWithoutRequestInput[] | BulkRequestItemUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: BulkRequestItemCreateOrConnectWithoutRequestInput | BulkRequestItemCreateOrConnectWithoutRequestInput[]
    createMany?: BulkRequestItemCreateManyRequestInputEnvelope
    connect?: BulkRequestItemWhereUniqueInput | BulkRequestItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BulkRequestItemUpdateManyWithoutRequestNestedInput = {
    create?: XOR<BulkRequestItemCreateWithoutRequestInput, BulkRequestItemUncheckedCreateWithoutRequestInput> | BulkRequestItemCreateWithoutRequestInput[] | BulkRequestItemUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: BulkRequestItemCreateOrConnectWithoutRequestInput | BulkRequestItemCreateOrConnectWithoutRequestInput[]
    upsert?: BulkRequestItemUpsertWithWhereUniqueWithoutRequestInput | BulkRequestItemUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: BulkRequestItemCreateManyRequestInputEnvelope
    set?: BulkRequestItemWhereUniqueInput | BulkRequestItemWhereUniqueInput[]
    disconnect?: BulkRequestItemWhereUniqueInput | BulkRequestItemWhereUniqueInput[]
    delete?: BulkRequestItemWhereUniqueInput | BulkRequestItemWhereUniqueInput[]
    connect?: BulkRequestItemWhereUniqueInput | BulkRequestItemWhereUniqueInput[]
    update?: BulkRequestItemUpdateWithWhereUniqueWithoutRequestInput | BulkRequestItemUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: BulkRequestItemUpdateManyWithWhereWithoutRequestInput | BulkRequestItemUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: BulkRequestItemScalarWhereInput | BulkRequestItemScalarWhereInput[]
  }

  export type BulkRequestItemUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<BulkRequestItemCreateWithoutRequestInput, BulkRequestItemUncheckedCreateWithoutRequestInput> | BulkRequestItemCreateWithoutRequestInput[] | BulkRequestItemUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: BulkRequestItemCreateOrConnectWithoutRequestInput | BulkRequestItemCreateOrConnectWithoutRequestInput[]
    upsert?: BulkRequestItemUpsertWithWhereUniqueWithoutRequestInput | BulkRequestItemUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: BulkRequestItemCreateManyRequestInputEnvelope
    set?: BulkRequestItemWhereUniqueInput | BulkRequestItemWhereUniqueInput[]
    disconnect?: BulkRequestItemWhereUniqueInput | BulkRequestItemWhereUniqueInput[]
    delete?: BulkRequestItemWhereUniqueInput | BulkRequestItemWhereUniqueInput[]
    connect?: BulkRequestItemWhereUniqueInput | BulkRequestItemWhereUniqueInput[]
    update?: BulkRequestItemUpdateWithWhereUniqueWithoutRequestInput | BulkRequestItemUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: BulkRequestItemUpdateManyWithWhereWithoutRequestInput | BulkRequestItemUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: BulkRequestItemScalarWhereInput | BulkRequestItemScalarWhereInput[]
  }

  export type BulkRequestCreateNestedOneWithoutItemsInput = {
    create?: XOR<BulkRequestCreateWithoutItemsInput, BulkRequestUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BulkRequestCreateOrConnectWithoutItemsInput
    connect?: BulkRequestWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ItemStatus
  }

  export type BulkRequestUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<BulkRequestCreateWithoutItemsInput, BulkRequestUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BulkRequestCreateOrConnectWithoutItemsInput
    upsert?: BulkRequestUpsertWithoutItemsInput
    connect?: BulkRequestWhereUniqueInput
    update?: XOR<XOR<BulkRequestUpdateToOneWithWhereWithoutItemsInput, BulkRequestUpdateWithoutItemsInput>, BulkRequestUncheckedUpdateWithoutItemsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type BulkRequestItemCreateWithoutRequestInput = {
    id: string
    rowNumber: number
    shardIndex: number
    sourceReference: string
    paymentRef: string
    storeId: string
    coffeeType: string
    price: number
    currency: string
    loyaltyCardId: string
    status?: $Enums.ItemStatus
    attempts?: number
    remotePaymentId?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BulkRequestItemUncheckedCreateWithoutRequestInput = {
    id: string
    rowNumber: number
    shardIndex: number
    sourceReference: string
    paymentRef: string
    storeId: string
    coffeeType: string
    price: number
    currency: string
    loyaltyCardId: string
    status?: $Enums.ItemStatus
    attempts?: number
    remotePaymentId?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BulkRequestItemCreateOrConnectWithoutRequestInput = {
    where: BulkRequestItemWhereUniqueInput
    create: XOR<BulkRequestItemCreateWithoutRequestInput, BulkRequestItemUncheckedCreateWithoutRequestInput>
  }

  export type BulkRequestItemCreateManyRequestInputEnvelope = {
    data: BulkRequestItemCreateManyRequestInput | BulkRequestItemCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type BulkRequestItemUpsertWithWhereUniqueWithoutRequestInput = {
    where: BulkRequestItemWhereUniqueInput
    update: XOR<BulkRequestItemUpdateWithoutRequestInput, BulkRequestItemUncheckedUpdateWithoutRequestInput>
    create: XOR<BulkRequestItemCreateWithoutRequestInput, BulkRequestItemUncheckedCreateWithoutRequestInput>
  }

  export type BulkRequestItemUpdateWithWhereUniqueWithoutRequestInput = {
    where: BulkRequestItemWhereUniqueInput
    data: XOR<BulkRequestItemUpdateWithoutRequestInput, BulkRequestItemUncheckedUpdateWithoutRequestInput>
  }

  export type BulkRequestItemUpdateManyWithWhereWithoutRequestInput = {
    where: BulkRequestItemScalarWhereInput
    data: XOR<BulkRequestItemUpdateManyMutationInput, BulkRequestItemUncheckedUpdateManyWithoutRequestInput>
  }

  export type BulkRequestItemScalarWhereInput = {
    AND?: BulkRequestItemScalarWhereInput | BulkRequestItemScalarWhereInput[]
    OR?: BulkRequestItemScalarWhereInput[]
    NOT?: BulkRequestItemScalarWhereInput | BulkRequestItemScalarWhereInput[]
    id?: UuidFilter<"BulkRequestItem"> | string
    requestId?: UuidFilter<"BulkRequestItem"> | string
    rowNumber?: IntFilter<"BulkRequestItem"> | number
    shardIndex?: IntFilter<"BulkRequestItem"> | number
    sourceReference?: StringFilter<"BulkRequestItem"> | string
    paymentRef?: StringFilter<"BulkRequestItem"> | string
    storeId?: StringFilter<"BulkRequestItem"> | string
    coffeeType?: StringFilter<"BulkRequestItem"> | string
    price?: FloatFilter<"BulkRequestItem"> | number
    currency?: StringFilter<"BulkRequestItem"> | string
    loyaltyCardId?: StringFilter<"BulkRequestItem"> | string
    status?: EnumItemStatusFilter<"BulkRequestItem"> | $Enums.ItemStatus
    attempts?: IntFilter<"BulkRequestItem"> | number
    remotePaymentId?: StringNullableFilter<"BulkRequestItem"> | string | null
    error?: StringNullableFilter<"BulkRequestItem"> | string | null
    createdAt?: DateTimeFilter<"BulkRequestItem"> | Date | string
    updatedAt?: DateTimeFilter<"BulkRequestItem"> | Date | string
  }

  export type BulkRequestCreateWithoutItemsInput = {
    id: string
    remoteBaseUrl: string
    fallbackStoreId?: string | null
    status?: $Enums.RequestStatus
    totalCount: number
    processedCount?: number
    successCount?: number
    failedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BulkRequestUncheckedCreateWithoutItemsInput = {
    id: string
    remoteBaseUrl: string
    fallbackStoreId?: string | null
    status?: $Enums.RequestStatus
    totalCount: number
    processedCount?: number
    successCount?: number
    failedCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BulkRequestCreateOrConnectWithoutItemsInput = {
    where: BulkRequestWhereUniqueInput
    create: XOR<BulkRequestCreateWithoutItemsInput, BulkRequestUncheckedCreateWithoutItemsInput>
  }

  export type BulkRequestUpsertWithoutItemsInput = {
    update: XOR<BulkRequestUpdateWithoutItemsInput, BulkRequestUncheckedUpdateWithoutItemsInput>
    create: XOR<BulkRequestCreateWithoutItemsInput, BulkRequestUncheckedCreateWithoutItemsInput>
    where?: BulkRequestWhereInput
  }

  export type BulkRequestUpdateToOneWithWhereWithoutItemsInput = {
    where?: BulkRequestWhereInput
    data: XOR<BulkRequestUpdateWithoutItemsInput, BulkRequestUncheckedUpdateWithoutItemsInput>
  }

  export type BulkRequestUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    remoteBaseUrl?: StringFieldUpdateOperationsInput | string
    fallbackStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    totalCount?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulkRequestUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    remoteBaseUrl?: StringFieldUpdateOperationsInput | string
    fallbackStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    totalCount?: IntFieldUpdateOperationsInput | number
    processedCount?: IntFieldUpdateOperationsInput | number
    successCount?: IntFieldUpdateOperationsInput | number
    failedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulkRequestItemCreateManyRequestInput = {
    id: string
    rowNumber: number
    shardIndex: number
    sourceReference: string
    paymentRef: string
    storeId: string
    coffeeType: string
    price: number
    currency: string
    loyaltyCardId: string
    status?: $Enums.ItemStatus
    attempts?: number
    remotePaymentId?: string | null
    error?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BulkRequestItemUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    shardIndex?: IntFieldUpdateOperationsInput | number
    sourceReference?: StringFieldUpdateOperationsInput | string
    paymentRef?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    coffeeType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    loyaltyCardId?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    attempts?: IntFieldUpdateOperationsInput | number
    remotePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulkRequestItemUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    shardIndex?: IntFieldUpdateOperationsInput | number
    sourceReference?: StringFieldUpdateOperationsInput | string
    paymentRef?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    coffeeType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    loyaltyCardId?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    attempts?: IntFieldUpdateOperationsInput | number
    remotePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulkRequestItemUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    rowNumber?: IntFieldUpdateOperationsInput | number
    shardIndex?: IntFieldUpdateOperationsInput | number
    sourceReference?: StringFieldUpdateOperationsInput | string
    paymentRef?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    coffeeType?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    loyaltyCardId?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    attempts?: IntFieldUpdateOperationsInput | number
    remotePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}