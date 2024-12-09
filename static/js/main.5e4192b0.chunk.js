(this["webpackJsonpcortex-dao-ui"] =
  this["webpackJsonpcortex-dao-ui"] || []).push([
  [1],
  {
    174: function (e, n) {},
    228: function (e, n, t) {
      "use strict";
      t.r(n);
      var i = t(1),
        a = t.n(i),
        r = t(106),
        o = t.n(r),
        s = t(36),
        c = t(18),
        d = t(16),
        l = t(3),
        u = t(22),
        p = t(24),
        b = t(46),
        m = t(58),
        j = t(132),
        h = t.n(j),
        f = h()(function (e) {
          return {
            isDrawerOpen: !1,
            setIsDrawerOpen: function (n) {
              return e({ isDrawerOpen: n });
            },
          };
        }),
        x = h()(function (e) {
          return {
            isWalletsModalOpen: !1,
            setIsWalletsModalOpen: function (n) {
              return e({ isWalletsModalOpen: n });
            },
            walletsModalPayload: null,
            setWalletsModalPayload: function (n) {
              return e({ walletsModalPayload: n });
            },
            isConfirmModalOpen: !1,
            setIsConfirmModalOpen: function (n) {
              return e({ isConfirmModalOpen: n });
            },
            confirmModalPayload: null,
            setConfirmModalPayload: function (n) {
              return e({ confirmModalPayload: n });
            },
          };
        }),
        y = t(155),
        g = t(156),
        O = t(157),
        v = t(158),
        w = {
          1: "https://eth-mainnet.alchemyapi.io/v2/".concat(
            "VE7DrMjfeLSwJn1lqIPC47o36_njyzIQ"
          ),
          4: "https://eth-rinkeby.alchemyapi.io/v2/".concat(
            Object({
              NODE_ENV: "production",
              PUBLIC_URL: ".",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_ALCHEMY_MAINNET_FREE_KEY:
                "VE7DrMjfeLSwJn1lqIPC47o36_njyzIQ",
            }).REACT_APP_ALCHEMY_RINKEBY_KEY
          ),
        },
        k = new y.a({ urls: { 1: w[1], 4: w[4] }, defaultChainId: 1 }),
        A = new g.a({ supportedChainIds: [1, 4] }),
        C =
          (new O.a({
            url: w[1],
            appName: "CortexDAO",
            supportedChainIds: [1, 4],
          }),
          new v.a({
            rpcUrl: w[1],
            bridge: "https://bridge.walletconnect.org",
            qrcode: !0,
          }),
          [
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "newCap",
                  type: "uint256",
                },
              ],
              name: "NewSupplyCap",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: !0,
                  internalType: "bytes32",
                  name: "previousAdminRole",
                  type: "bytes32",
                },
                {
                  indexed: !0,
                  internalType: "bytes32",
                  name: "newAdminRole",
                  type: "bytes32",
                },
              ],
              name: "RoleAdminChanged",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RoleGranted",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "bytes32",
                  name: "role",
                  type: "bytes32",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
              ],
              name: "RoleRevoked",
              type: "event",
            },
            {
              anonymous: !1,
              inputs: [
                {
                  indexed: !0,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: !0,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: !1,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              inputs: [],
              name: "DEFAULT_ADMIN_ROLE",
              outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "MINTER_ROLE",
              outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "PROTOCOL_ROLE",
              outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "owner", type: "address" },
                { internalType: "address", name: "spender", type: "address" },
              ],
              name: "allowance",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "spender", type: "address" },
                { internalType: "uint256", name: "amount", type: "uint256" },
              ],
              name: "approve",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "account", type: "address" },
              ],
              name: "balanceOf",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "spender", type: "address" },
                {
                  internalType: "uint256",
                  name: "subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "bytes32", name: "role", type: "bytes32" },
              ],
              name: "getRoleAdmin",
              outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "bytes32", name: "role", type: "bytes32" },
                { internalType: "uint256", name: "index", type: "uint256" },
              ],
              name: "getRoleMember",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "bytes32", name: "role", type: "bytes32" },
              ],
              name: "getRoleMemberCount",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "bytes32", name: "role", type: "bytes32" },
                { internalType: "address", name: "account", type: "address" },
              ],
              name: "grantRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "bytes32", name: "role", type: "bytes32" },
                { internalType: "address", name: "account", type: "address" },
              ],
              name: "hasRole",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "spender", type: "address" },
                {
                  internalType: "uint256",
                  name: "addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "initializeV2",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "account", type: "address" },
                { internalType: "uint256", name: "amount", type: "uint256" },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "proxyAdmin",
              outputs: [
                { internalType: "address", name: "adm", type: "address" },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "bytes32", name: "role", type: "bytes32" },
                { internalType: "address", name: "account", type: "address" },
              ],
              name: "renounceRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "bytes32", name: "role", type: "bytes32" },
                { internalType: "address", name: "account", type: "address" },
              ],
              name: "revokeRole",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "uint256", name: "newCap", type: "uint256" },
              ],
              name: "setSupplyCap",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "supplyCap",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
              ],
              name: "supportsInterface",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "amount", type: "uint256" },
              ],
              name: "transfer",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                { internalType: "address", name: "from", type: "address" },
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "amount", type: "uint256" },
              ],
              name: "transferFrom",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              stateMutability: "nonpayable",
              type: "function",
            },
          ]),
        T = [
          {
            anonymous: !1,
            inputs: [],
            name: "AddLiquidityLocked",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [],
            name: "AddLiquidityUnlocked",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            name: "AddressRegistryChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "arbitrageFee",
                type: "uint256",
              },
            ],
            name: "ArbitrageFeeChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "arbitrageFeePeriod",
                type: "uint256",
              },
            ],
            name: "ArbitrageFeePeriodChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "contract IDetailedERC20",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "aptMintAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokenEthValue",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "totalEthValueLocked",
                type: "uint256",
              },
            ],
            name: "DepositedAPT",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "emergencySafe",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "contract IERC20",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "balance",
                type: "uint256",
              },
            ],
            name: "EmergencyExit",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Paused",
            type: "event",
          },
          { anonymous: !1, inputs: [], name: "RedeemLocked", type: "event" },
          { anonymous: !1, inputs: [], name: "RedeemUnlocked", type: "event" },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "contract IDetailedERC20",
                name: "token",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "redeemedTokenAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "aptRedeemAmount",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "tokenEthValue",
                type: "uint256",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "totalEthValueLocked",
                type: "uint256",
              },
            ],
            name: "RedeemedAPT",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "reservePercentage",
                type: "uint256",
              },
            ],
            name: "ReservePercentageChanged",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
            ],
            name: "RoleGranted",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address",
              },
            ],
            name: "RoleRevoked",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "Unpaused",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: "uint256",
                name: "withdrawFee",
                type: "uint256",
              },
            ],
            name: "WithdrawFeeChanged",
            type: "event",
          },
          {
            inputs: [],
            name: "ADMIN_ROLE",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "CONTRACT_ROLE",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "DEFAULT_ADMIN_ROLE",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "DEFAULT_APT_TO_UNDERLYER_FACTOR",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "EMERGENCY_ROLE",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "LP_ROLE",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "depositAmount",
                type: "uint256",
              },
            ],
            name: "addLiquidity",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "addLiquidityLock",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "addressRegistry",
            outputs: [
              {
                internalType: "contract IAddressRegistryV2",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "arbitrageFee",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "arbitrageFeePeriod",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "depositAmount",
                type: "uint256",
              },
            ],
            name: "calculateMintAmount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "token", type: "address" },
            ],
            name: "emergencyExit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "emergencyLock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "emergencyLockAddLiquidity",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "emergencyLockRedeem",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "addressRegistry_",
                type: "address",
              },
            ],
            name: "emergencySetAddressRegistry",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "emergencyUnlock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "emergencyUnlockAddLiquidity",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "emergencyUnlockRedeem",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "aptAmount", type: "uint256" },
            ],
            name: "getAPTValue",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getPoolTotalValue",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getReserveTopUpValue",
            outputs: [{ internalType: "int256", name: "", type: "int256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
            ],
            name: "getRoleAdmin",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
              { internalType: "uint256", name: "index", type: "uint256" },
            ],
            name: "getRoleMember",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
            ],
            name: "getRoleMemberCount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "aptAmount", type: "uint256" },
            ],
            name: "getUnderlyerAmount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "aptAmount", type: "uint256" },
            ],
            name: "getUnderlyerAmountWithFee",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getUnderlyerPrice",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "underlyerAmount",
                type: "uint256",
              },
            ],
            name: "getValueFromUnderlyerAmount",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "grantRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "hasRole",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "adminAddress",
                type: "address",
              },
              {
                internalType: "contract IDetailedERC20",
                name: "underlyer_",
                type: "address",
              },
              {
                internalType: "contract AggregatorV3Interface",
                name: "priceAgg",
                type: "address",
              },
            ],
            name: "initialize",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "addressRegistry_",
                type: "address",
              },
            ],
            name: "initializeUpgrade",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "initializeV3",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "isEarlyRedeem",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "lastDepositTime",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "paused",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "proxyAdmin",
            outputs: [
              { internalType: "address", name: "adm", type: "address" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "aptAmount", type: "uint256" },
            ],
            name: "redeem",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "redeemLock",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "renounceRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "reservePercentage",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "bytes32", name: "role", type: "bytes32" },
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "revokeRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "feePercentage",
                type: "uint256",
              },
              { internalType: "uint256", name: "feePeriod", type: "uint256" },
            ],
            name: "setArbitrageFee",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "reservePercentage_",
                type: "uint256",
              },
            ],
            name: "setReservePercentage",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "withdrawFee_",
                type: "uint256",
              },
            ],
            name: "setWithdrawFee",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferToLpAccount",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "underlyer",
            outputs: [
              {
                internalType: "contract IDetailedERC20",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "withdrawFee",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        M = [
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        E = [
          { name: "Shutdown", inputs: [], anonymous: !1, type: "event" },
          {
            name: "CommitOwnership",
            inputs: [{ type: "address", name: "admin", indexed: !1 }],
            anonymous: !1,
            type: "event",
          },
          {
            name: "ApplyOwnership",
            inputs: [{ type: "address", name: "admin", indexed: !1 }],
            anonymous: !1,
            type: "event",
          },
          {
            name: "Deposit",
            inputs: [
              { type: "address", name: "provider", indexed: !0 },
              { type: "uint256", name: "value", indexed: !1 },
              { type: "uint256", name: "locktime", indexed: !0 },
              { type: "int128", name: "type", indexed: !1 },
              { type: "uint256", name: "ts", indexed: !1 },
            ],
            anonymous: !1,
            type: "event",
          },
          {
            name: "Withdraw",
            inputs: [
              { type: "address", name: "provider", indexed: !0 },
              { type: "uint256", name: "value", indexed: !1 },
              { type: "uint256", name: "ts", indexed: !1 },
            ],
            anonymous: !1,
            type: "event",
          },
          {
            name: "Supply",
            inputs: [
              { type: "uint256", name: "prevSupply", indexed: !1 },
              { type: "uint256", name: "supply", indexed: !1 },
            ],
            anonymous: !1,
            type: "event",
          },
          {
            name: "Delegate",
            inputs: [
              { type: "address", name: "user", indexed: !1 },
              { type: "address", name: "delegate", indexed: !1 },
            ],
            anonymous: !1,
            type: "event",
          },
          {
            outputs: [],
            inputs: [
              { type: "address", name: "token_addr" },
              { type: "string", name: "_name" },
              { type: "string", name: "_symbol" },
              { type: "string", name: "_version" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            name: "shutdown",
            outputs: [],
            inputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "commit_transfer_ownership",
            outputs: [],
            inputs: [{ type: "address", name: "addr" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "apply_transfer_ownership",
            outputs: [],
            inputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "commit_smart_wallet_checker",
            outputs: [],
            inputs: [{ type: "address", name: "addr" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "apply_smart_wallet_checker",
            outputs: [],
            inputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "assign_delegate",
            outputs: [],
            inputs: [{ type: "address", name: "addr" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "get_last_user_slope",
            outputs: [{ type: "int128", name: "" }],
            inputs: [{ type: "address", name: "addr" }],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "user_point_history__ts",
            outputs: [{ type: "uint256", name: "" }],
            inputs: [
              { type: "address", name: "_addr" },
              { type: "uint256", name: "_idx" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "locked__end",
            outputs: [{ type: "uint256", name: "" }],
            inputs: [{ type: "address", name: "_addr" }],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "checkpoint",
            outputs: [],
            inputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "deposit_for",
            outputs: [],
            inputs: [
              { type: "address", name: "_addr" },
              { type: "uint256", name: "_value" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "create_lock",
            outputs: [],
            inputs: [
              { type: "uint256", name: "_value" },
              { type: "uint256", name: "_unlock_time" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "create_lock_for",
            outputs: [],
            inputs: [
              { type: "address", name: "_addr" },
              { type: "uint256", name: "_value" },
              { type: "uint256", name: "_unlock_time" },
            ],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "increase_amount",
            outputs: [],
            inputs: [{ type: "uint256", name: "_value" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "increase_unlock_time",
            outputs: [],
            inputs: [{ type: "uint256", name: "_unlock_time" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "withdraw",
            outputs: [],
            inputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "balanceOf",
            outputs: [{ type: "uint256", name: "" }],
            inputs: [{ type: "address", name: "addr" }],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "balanceOf",
            outputs: [{ type: "uint256", name: "" }],
            inputs: [
              { type: "address", name: "addr" },
              { type: "uint256", name: "_t" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "balanceOfAt",
            outputs: [{ type: "uint256", name: "" }],
            inputs: [
              { type: "address", name: "addr" },
              { type: "uint256", name: "_block" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "totalSupply",
            outputs: [{ type: "uint256", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "totalSupply",
            outputs: [{ type: "uint256", name: "" }],
            inputs: [{ type: "uint256", name: "t" }],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "totalSupplyAt",
            outputs: [{ type: "uint256", name: "" }],
            inputs: [{ type: "uint256", name: "_block" }],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "changeController",
            outputs: [],
            inputs: [{ type: "address", name: "_newController" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            name: "token",
            outputs: [{ type: "address", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "supply",
            outputs: [{ type: "uint256", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "locked",
            outputs: [
              { type: "int128", name: "amount" },
              { type: "uint256", name: "end" },
            ],
            inputs: [{ type: "address", name: "arg0" }],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "epoch",
            outputs: [{ type: "uint256", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "point_history",
            outputs: [
              { type: "int128", name: "bias" },
              { type: "int128", name: "slope" },
              { type: "uint256", name: "ts" },
              { type: "uint256", name: "blk" },
            ],
            inputs: [{ type: "uint256", name: "arg0" }],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "user_point_history",
            outputs: [
              { type: "int128", name: "bias" },
              { type: "int128", name: "slope" },
              { type: "uint256", name: "ts" },
              { type: "uint256", name: "blk" },
            ],
            inputs: [
              { type: "address", name: "arg0" },
              { type: "uint256", name: "arg1" },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "user_point_epoch",
            outputs: [{ type: "uint256", name: "" }],
            inputs: [{ type: "address", name: "arg0" }],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "slope_changes",
            outputs: [{ type: "int128", name: "" }],
            inputs: [{ type: "uint256", name: "arg0" }],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "controller",
            outputs: [{ type: "address", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "transfersEnabled",
            outputs: [{ type: "bool", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "name",
            outputs: [{ type: "string", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "symbol",
            outputs: [{ type: "string", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "version",
            outputs: [{ type: "string", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "decimals",
            outputs: [{ type: "uint256", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "future_smart_wallet_checker",
            outputs: [{ type: "address", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "smart_wallet_checker",
            outputs: [{ type: "address", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "admin",
            outputs: [{ type: "address", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "future_admin",
            outputs: [{ type: "address", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "is_shutdown",
            outputs: [{ type: "bool", name: "" }],
            inputs: [],
            stateMutability: "view",
            type: "function",
          },
          {
            name: "delegate_for",
            outputs: [{ type: "address", name: "" }],
            inputs: [{ type: "address", name: "arg0" }],
            stateMutability: "view",
            type: "function",
          },
        ],
        R = new Date().getTimezoneOffset(),
        D = {
          1: {
            usd: { decimals: 8 },
            cxd: {
              address: "0x5A56Da75c50aA2733F5Fa9A2442AaEfcBc60B2e6",
              abi: C,
              decimals: 18,
              symbol: "CXD",
              image:
                "https://cdn-images-1.medium.com/fit/c/72/72/1*_BnfFepl5RFcphuL2SDm0g.png",
            },
            dai: {
              address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              abi: M,
              decimals: 18,
              symbol: "DAI",
            },
            usdc: {
              address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
              abi: M,
              decimals: 6,
              symbol: "USDC",
            },
            tether: {
              address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
              abi: M,
              decimals: 6,
              symbol: "USDT",
            },
            daiApt: {
              address: "0x75CE0E501e2E6776FcAAa514f394a88a772A8970",
              abi: T,
              decimals: 18,
              symbol: "DAI-APT",
            },
            usdcApt: {
              address: "0xe18b0365D5D09F394f84eE56ed29DD2d8D6Fba5f",
              abi: T,
              decimals: 18,
              symbol: "USDC-APT",
            },
            tetherApt: {
              address: "0xeA9c5a2717D5Ab75afaAC340151e73a7e37d99A7",
              abi: T,
              decimals: 18,
              symbol: "USDT-APT",
            },
          },
          4: {
            cxd: {
              address: "0xf90De46Fc7898Ec5114360623CBC0283A08fAC40",
              abi: C,
              decimals: 18,
              symbol: "CXD",
            },
          },
        },
        L = {
          1: {
            dai: { id: "daiApt", address: D[1].daiApt.address },
            usdc: { id: "usdcApt", address: D[1].usdcApt.address },
            tether: { id: "tetherApt", address: D[1].tetherApt.address },
          },
        },
        F = {
          1: { address: "0x6021D8e7537d68bCEC9A438b2C134c24Cbcc1ce3", abi: E },
          4: { address: "0x1A646Bf6feed09aC0472fd410A009b778f4B4b77", abi: E },
        },
        z = {
          1: {
            address: "0x12Df53D26CD991A5e7BAFa3BCEec06a1CF833435",
            abi: [
              {
                name: "CommitAdmin",
                inputs: [{ type: "address", name: "admin", indexed: !1 }],
                anonymous: !1,
                type: "event",
              },
              {
                name: "ApplyAdmin",
                inputs: [{ type: "address", name: "admin", indexed: !1 }],
                anonymous: !1,
                type: "event",
              },
              {
                name: "ToggleAllowCheckpointToken",
                inputs: [{ type: "bool", name: "toggle_flag", indexed: !1 }],
                anonymous: !1,
                type: "event",
              },
              {
                name: "CheckpointToken",
                inputs: [
                  { type: "uint256", name: "time", indexed: !1 },
                  { type: "uint256", name: "tokens", indexed: !1 },
                ],
                anonymous: !1,
                type: "event",
              },
              {
                name: "Claimed",
                inputs: [
                  { type: "address", name: "recipient", indexed: !0 },
                  { type: "uint256", name: "amount", indexed: !1 },
                  { type: "uint256", name: "claim_epoch", indexed: !1 },
                  { type: "uint256", name: "max_epoch", indexed: !1 },
                ],
                anonymous: !1,
                type: "event",
              },
              {
                outputs: [],
                inputs: [
                  { type: "address", name: "_voting_escrow" },
                  { type: "uint256", name: "_start_time" },
                  { type: "address", name: "_token" },
                  { type: "address", name: "_admin" },
                  { type: "address", name: "_emergency_return" },
                ],
                stateMutability: "nonpayable",
                type: "constructor",
              },
              {
                name: "checkpoint_token",
                outputs: [],
                inputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                name: "ve_for_at",
                outputs: [{ type: "uint256", name: "" }],
                inputs: [
                  { type: "address", name: "_user" },
                  { type: "uint256", name: "_timestamp" },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "checkpoint_total_supply",
                outputs: [],
                inputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                name: "claim",
                outputs: [{ type: "uint256", name: "" }],
                inputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                name: "claim",
                outputs: [{ type: "uint256", name: "" }],
                inputs: [{ type: "address", name: "_addr" }],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                name: "claim_many",
                outputs: [{ type: "bool", name: "" }],
                inputs: [{ type: "address[20]", name: "_receivers" }],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                name: "burn",
                outputs: [{ type: "bool", name: "" }],
                inputs: [{ type: "address", name: "_coin" }],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                name: "commit_admin",
                outputs: [],
                inputs: [{ type: "address", name: "_addr" }],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                name: "apply_admin",
                outputs: [],
                inputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                name: "toggle_allow_checkpoint_token",
                outputs: [],
                inputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                name: "kill_me",
                outputs: [],
                inputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                name: "recover_balance",
                outputs: [{ type: "bool", name: "" }],
                inputs: [{ type: "address", name: "_coin" }],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                name: "start_time",
                outputs: [{ type: "uint256", name: "" }],
                inputs: [],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "time_cursor",
                outputs: [{ type: "uint256", name: "" }],
                inputs: [],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "time_cursor_of",
                outputs: [{ type: "uint256", name: "" }],
                inputs: [{ type: "address", name: "arg0" }],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "user_epoch_of",
                outputs: [{ type: "uint256", name: "" }],
                inputs: [{ type: "address", name: "arg0" }],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "last_token_time",
                outputs: [{ type: "uint256", name: "" }],
                inputs: [],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "tokens_per_week",
                outputs: [{ type: "uint256", name: "" }],
                inputs: [{ type: "uint256", name: "arg0" }],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "voting_escrow",
                outputs: [{ type: "address", name: "" }],
                inputs: [],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "token",
                outputs: [{ type: "address", name: "" }],
                inputs: [],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "total_received",
                outputs: [{ type: "uint256", name: "" }],
                inputs: [],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "token_last_balance",
                outputs: [{ type: "uint256", name: "" }],
                inputs: [],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "ve_supply",
                outputs: [{ type: "uint256", name: "" }],
                inputs: [{ type: "uint256", name: "arg0" }],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "admin",
                outputs: [{ type: "address", name: "" }],
                inputs: [],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "future_admin",
                outputs: [{ type: "address", name: "" }],
                inputs: [],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "can_checkpoint_token",
                outputs: [{ type: "bool", name: "" }],
                inputs: [],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "emergency_return",
                outputs: [{ type: "address", name: "" }],
                inputs: [],
                stateMutability: "view",
                type: "function",
              },
              {
                name: "is_killed",
                outputs: [{ type: "bool", name: "" }],
                inputs: [],
                stateMutability: "view",
                type: "function",
              },
            ],
          },
        },
        S = {
          1: [
            [D[1].cxd.address, D[1].cxd.abi],
            [D[1].dai.address, D[1].dai.abi],
            [D[1].usdc.address, D[1].usdc.abi],
            [D[1].tether.address, D[1].tether.abi],
            [D[1].daiApt.address, D[1].daiApt.abi],
            [D[1].usdcApt.address, D[1].usdcApt.abi],
            [D[1].tetherApt.address, D[1].tetherApt.abi],
            [F[1].address, F[1].abi],
            [z[1].address, z[1].abi],
          ],
          4: [
            [D[4].cxd.address, D[4].cxd.abi],
            [F[4].address, F[4].abi],
          ],
        },
        B = 604800,
        P = "https://us-central1-continual-grin-289318.cloudfunctions.net",
        I =
          ("".concat(P, "/rewards"),
          "".concat(P, "/rewards_rinkeby"),
          "".concat(P, "/signatures"),
          "".concat(P, "/signatures_rinkeby"),
          [
            { label: "1W", addtlSecs: B },
            { label: "1M", addtlSecs: 2419200 },
            { label: "3M", addtlSecs: 7257600 },
            { label: "6M", addtlSecs: 14515200 },
            { label: "1Y", addtlSecs: 31449600 },
            { label: "2Y", addtlSecs: 62899200 },
            { label: "3Y", addtlSecs: 94348800 },
            { label: "4Y", addtlSecs: 125798400 },
          ]),
        V = d.a.getDefaultProvider("homestead", {
          alchemy: "VE7DrMjfeLSwJn1lqIPC47o36_njyzIQ",
        }),
        W = t(12);
      var H,
        N,
        U,
        X,
        G,
        Z,
        Y,
        q,
        J,
        K,
        Q,
        _,
        $,
        ee = "#FFF",
        ne = "#18A974",
        te = "#1A202E",
        ie = "#656E85",
        ae = "#EAECF2",
        re = "#FAFAFA",
        oe = "#72C9A9",
        se = {
          colors: {
            whitePrimary: ee,
            brandPrimary: ne,
            hoverPrimary: oe,
            pressedPrimary: "#0D7951",
            lightBrandPrimary: "#E8F6F1",
            darkPrimary: te,
            darkGray: ie,
            brightGray: ae,
            logo: te,
            background: re,
            font: te,
            danger: "#CC3514",
            secondary: "#8072F8",
            grey: "#808080",
            success: "#04b485",
            dark: "#000",
          },
          space: [
            "0",
            "0.25rem",
            "0.5rem",
            "0.75rem",
            "1rem",
            "1.5rem",
            "2rem",
            "3rem",
            "4rem",
            "6rem",
            "8rem",
            "12rem",
            "16rem",
            "24rem",
            "32rem",
            "40rem",
            "48rem",
          ],
          typeScale: [
            "12px",
            "14px",
            "16px",
            "18px",
            "20px",
            "24px",
            "32px",
            "48px",
          ],
          breakpoints: {
            mobile: "(min-width: 320px)",
            tablet: "(min-width: 501px)",
            normal: "(min-width: 769px)",
            widescreen: "(min-width: 1201px)",
            landscape: "(max-height: 500px)",
          },
          borderRadius: "10px",
        },
        ce = t(4),
        de = t.p + "static/media/aeonik-light-webfont.3c491fad.woff",
        le = t.p + "static/media/aeonik-light-webfont.d5c3e6f6.woff2",
        ue = t.p + "static/media/aeonik-light-webfont.932ada28.ttf",
        pe = t.p + "static/media/aeonik-regular-webfont.255bb257.woff",
        be = t.p + "static/media/aeonik-regular-webfont.c436df96.woff2",
        me = t.p + "static/media/aeonik-regular-webfont.4af5302d.ttf",
        je = t.p + "static/media/aeonik-medium-webfont.0160821a.woff",
        he = t.p + "static/media/aeonik-medium-webfont.988297eb.woff2",
        fe = t.p + "static/media/aeonik-medium-webfont.4e3254aa.ttf",
        xe = t.p + "static/media/aeonik-bold-webfont.fcf32284.woff",
        ye = t.p + "static/media/aeonik-bold-webfont.e7dfd149.woff2",
        ge = t.p + "static/media/aeonik-bold-webfont.8a6944ed.ttf",
        Oe = Object(l.b)(
          H ||
            (H = Object(ce.a)([
              "\n  @font-face {\n    font-family: 'Aeonik Light';\n    src: url(",
              ") format('woff'),\n         url(",
              ") format('woff2'),\n         url(",
              ") format('truetype');\n  } \n\n  @font-face {\n    font-family: 'Aeonik Regular';\n    src: url(",
              ") format('woff'),\n         url(",
              ") format('woff2'),\n         url(",
              ") format('truetype');\n  }  \n\n  @font-face {\n    font-family: 'Aeonik Medium';\n    src: url(",
              ") format('woff'),\n         url(",
              ") format('woff2'),\n         url(",
              ") format('truetype');\n\n  }  \n\n  @font-face {\n    font-family: 'Aeonik Bold';\n    src: url(",
              ") format('woff'),\n         url(",
              ") format('woff2'),\n         url(",
              ") format('truetype');\n\n  }  \n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    background-color: ",
              ";\n    color: ",
              ";\n    font-family: 'Plus Jakarta Sans', sans-serif;\n\n    ",
              "\n  }\n\n  h1 {\n    font-family: 'Aeonik Bold';\n    font-size: 34px;\n  }\n\n  h2 {\n    font-family: 'Aeonik Regular';\n    font-size: 1.25rem;\n    font-weight: 500;\n  }\n\n  h3 {\n    font-size: 14px;\n    font-weight: 600;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  address {\n    color: ",
              ";\n    text-decoration: underline;\n  }\n\n  // HIDE ARROWS FROM INPUT TYPE=NUMBER\n  /* Chrome, Safari, Edge, Opera */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  /* Firefox */\n  input[type='number'] {\n    -moz-appearance: textfield;\n  }\n",
            ])),
          de,
          le,
          ue,
          pe,
          be,
          me,
          je,
          he,
          fe,
          xe,
          ye,
          ge,
          function (e) {
            return e.theme.colors.background;
          },
          function (e) {
            return e.theme.colors.font;
          },
          function (e) {
            return e.isDrawOpen && "overflow: hidden}";
          },
          function (e) {
            return e.theme.colors.brandPrimary;
          }
        ),
        ve = t(239),
        we = t.p + "static/media/curve-glass-0.838bf9b3.png",
        ke = t(14),
        Ae = t(237),
        Ce = t(238),
        Te = t(43),
        Me = t(20),
        Ee = t(5),
        Re = t.n(Ee),
        De = t(34),
        Le = t.n(De),
        Fe = t(44),
        ze = t.n(Fe),
        Se = t(45),
        Be = t(0),
        Pe = function (e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
          if (Ve(e)) return (e = e.toString()), d.a.utils.parseUnits(e, n);
        },
        Ie = function (e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
          if (Ve(e)) {
            var t = Le()(e.toString());
            return t.div("".concat(Math.pow(10, n)));
          }
        },
        Ve = function (e) {
          return (
            null !== e &&
            void 0 !== e &&
            "" !== e &&
            !isNaN(e) &&
            e !== 1 / 0 &&
            e !== -1 / 0
          );
        },
        We = "\u2014 \u2014",
        He = function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = n.format,
            i = void 0 === t ? "decimal" : t,
            a = n.decimals,
            r = void 0 === a ? 2 : a,
            o = n.round,
            s = void 0 !== o && o,
            c = n.units;
          if (!Ve(e)) return We;
          var d = (e = Le()(e)).toString();
          "percent" === i && (d = (100 * d).toString()),
            !1 === s && (d = Ne(d, r));
          var l = Number(d).toLocaleString("en-US", {
            style: "percent" === i ? "decimal" : i,
            currency: "USD",
            minimumFractionDigits: r,
            maximumFractionDigits: r,
          });
          return (
            "percent" === i &&
              (l = Object(Be.jsxs)(Be.Fragment, {
                children: [
                  l,
                  Object(Be.jsx)("span", {
                    style: {
                      fontFamily: "Plus Jakarta Sans",
                      fontSize: ".7em",
                      fontWeight: "inherit",
                      color: "inherit",
                    },
                    children: "%",
                  }),
                ],
              })),
            c &&
              (l = Object(Be.jsxs)(Be.Fragment, {
                children: [
                  l,
                  Object(Be.jsx)("span", {
                    style: {
                      marginLeft: 6,
                      fontFamily: "Plus Jakarta Sans",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: ie,
                    },
                    children: c,
                  }),
                ],
              })),
            l
          );
        },
        Ne = function (e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          if (!Ve(e)) {
            var t = new Error(
              "truncateNum() was passed an invalid value (".concat(e, ")")
            );
            throw (console.error(t.message), t.message);
          }
          var i = e.toString();
          return (
            i.includes(".") || (i = "".concat(i, ".0")),
            (i = i.slice(0, i.indexOf(".") + (n + 1)))
          );
        },
        Ue = function (e) {
          return Ve(e) && 0 !== e
            ? ze.a.unix(e).utc().format("MMM DD, YYYY")
            : We;
        },
        Xe = function (e) {
          return ze.a.unix(e + 60 * R).toDate();
        },
        Ge = function (e) {
          return Math.floor(e / B) * B;
        },
        Ze = function (e) {
          return ""
            .concat(e.substring(0, 5), "...")
            .concat(e.substring(e.length - 4));
        },
        Ye = function (e) {
          if (e) {
            var n = ze.a.unix(ze()().unix());
            return ze()(ze.a.unix(e)).diff(n, "weeks");
          }
        },
        qe = function (e) {
          if (e) {
            var n = ze.a.unix(ze()().unix());
            return ze()(ze.a.unix(e.toNumber())).diff(n, "days");
          }
        },
        Je = function (e) {
          var n = ze()().unix();
          return Ge(n + e);
        },
        Ke = function (e, n) {
          return null === n || void 0 === n ? void 0 : n.gte(e);
        },
        Qe = function (e) {
          var n = ze()().unix(),
            t = Ge(125798400 + n);
          return null === e || void 0 === e ? void 0 : e.gte(t);
        },
        _e = function (e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        },
        $e = (function () {
          var e = Object(Me.a)(
            Re.a.mark(function e(n) {
              var t, i, a, r, o;
              return Re.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = n.contract),
                        (i = n.functionName),
                        (a = n.args),
                        (r = void 0 === a ? [] : a),
                        (o = (function () {
                          var e = Object(Me.a)(
                            Re.a.mark(function e() {
                              var n, a;
                              return Re.a.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        (n = t.functions)[i].apply(
                                          n,
                                          Object(Te.a)(r)
                                        )
                                      );
                                    case 2:
                                      return (
                                        (a = e.sent), (e.next = 5), a.wait()
                                      );
                                    case 5:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (e.next = 4),
                        b.b.promise(
                          o(),
                          {
                            loading: "Confirm transaction through your wallet",
                            success: "Transaction was successful!",
                            error: function (e) {
                              return e.message;
                            },
                          },
                          { success: { duration: 5e3 } }
                        )
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        en = (function () {
          var e = Object(Me.a)(
            Re.a.mark(function e(n, t, i, a, r) {
              var o, s, c;
              return Re.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (n && t && i && a && r) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          (o = n.getSigner()),
                          (s = new d.a.Contract(
                            D[t][i].address,
                            D[t][i].abi,
                            o
                          )),
                          (c = Pe(Number.MAX_SAFE_INTEGER, D[t][i].decimals)),
                          (e.prev = 5),
                          (e.next = 8),
                          $e({
                            contract: s,
                            functionName: "approve",
                            args: [a, c],
                          })
                        );
                      case 8:
                        r(void 0, !0), (e.next = 14);
                        break;
                      case 11:
                        (e.prev = 11),
                          (e.t0 = e.catch(5)),
                          console.error(e.t0.message);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[5, 11]]
              );
            })
          );
          return function (n, t, i, a, r) {
            return e.apply(this, arguments);
          };
        })(),
        nn = function (e, n, t, i, a) {
          var r;
          return !t || Le()(t).isLessThanOrEqualTo(0)
            ? (a({
                type: "SHOW_ERROR",
                payload: { inputError: "Enter an amount" },
              }),
              !1)
            : Le()(t).isLessThan(0.01)
            ? (a({
                type: "SHOW_ERROR",
                payload: { inputError: "Input cannot be less than .01" },
              }),
              !1)
            : null === (r = Ie(i, D[e][n].decimals)) ||
              void 0 === r ||
              !r.lt(t) ||
              (a({
                type: "SHOW_ERROR",
                payload: { inputError: "Input exceeds balance" },
              }),
              !1);
        },
        tn = function (e, n, t) {
          var i;
          return e.isLoading
            ? Object(Be.jsx)(Se.BeatLoader, { size: n, color: t })
            : He(null === (i = e.data) || void 0 === i ? void 0 : i.apr, {
                format: "percent",
                decimals: 2,
              });
        },
        an = t(236),
        rn = {
          "1/4": "1fr 3fr",
          "1/3": "1fr 2fr",
          "1/2": "1fr 1fr",
          "2/3": "2fr 1fr",
          "3/4": "3fr 1fr",
          "auto-start": "auto 1fr",
          "auto-end": "1fr auto",
        },
        on = {
          start: "flex-start",
          center: "center",
          end: "flex-end",
          spaceBetween: "space-between",
        },
        sn = {
          all: "& > *  { flex: 1 }",
          start: "& > :first-child { flex: 1 }",
          end: "& > :last-child { flex: 1 }",
        },
        cn = l.d.div(
          N || (N = Object(ce.a)(["\n  display: grid;\n  gap: ", ";\n"])),
          function (e) {
            var n,
              t = e.theme,
              i = e.gap;
            return null !== (n = t.space[i]) && void 0 !== n ? n : t.space[4];
          }
        ),
        dn = l.d.div(
          U ||
            (U = Object(ce.a)([
              "\n  display: grid;\n  gap: ",
              ";\n  grid-template-columns: ",
              ";\n",
            ])),
          function (e) {
            var n,
              t = e.theme,
              i = e.gap;
            return null !== (n = t.space[i]) && void 0 !== n ? n : t.space[4];
          },
          function (e) {
            var n,
              t = e.minmax,
              i = e.fraction;
            return t
              ? "repeat(auto-fit, minmax(".concat(t, "))")
              : null !== (n = rn[i]) && void 0 !== n
              ? n
              : rn["1/2"];
          }
        ),
        ln = l.d.div(
          X ||
            (X = Object(ce.a)([
              "\n  --columns: ",
              ";\n\n  display: grid;\n  grid-template-columns: repeat(var(--columns), 1fr);\n  gap: ",
              ";\n",
            ])),
          function (e) {
            var n = e.columns;
            return void 0 === n ? 1 : n;
          },
          function (e) {
            var n,
              t = e.theme,
              i = e.gap;
            return null !== (n = t.space[i]) && void 0 !== n ? n : t.space[4];
          }
        ),
        un = l.d.div(
          G ||
            (G = Object(ce.a)([
              "\n  grid-column: span min(",
              ", var(--columns));\n",
            ])),
          function (e) {
            var n = e.spread;
            return void 0 === n ? 1 : n;
          }
        ),
        pn = l.d.div(
          Z ||
            (Z = Object(ce.a)([
              "\n  --gap: ",
              ";\n\n  display: flex;\n  justify-content: ",
              ";\n  align-items: ",
              ";\n\n  /* gap: var(--gap); */\n  & > :not(:last-child) {\n    margin-right: var(--gap);\n  }\n\n  flex-wrap: wrap;\n",
            ])),
          function (e) {
            var n,
              t = e.theme,
              i = e.gap;
            return null !== (n = t.space[i]) && void 0 !== n ? n : "1rem";
          },
          function (e) {
            var n,
              t = e.justify;
            return null !== (n = on[t]) && void 0 !== n ? n : on.start;
          },
          function (e) {
            var n,
              t = e.align;
            return null !== (n = on[t]) && void 0 !== n ? n : on.start;
          }
        ),
        bn = Object(l.c)(
          Y ||
            (Y = Object(ce.a)([
              "\n  --switchAt: ",
              ";\n\n  flex-wrap: wrap;\n\n  & > * {\n    min-width: fit-content;\n    flex-basis: calc((var(--switchAt) - (100% - var(--gap))) * 999);\n  }\n",
            ])),
          function (e) {
            var n = e.switchAt;
            return "string" === typeof n ? n : "".concat(n, "px");
          }
        ),
        mn = Object(l.d)(pn)(
          q ||
            (q = Object(ce.a)([
              "\n  flex-wrap: nowrap;\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            var n,
              t = e.stretch;
            return "number" === typeof t
              ? "& > :nth-child(".concat(t + 1, ") { flex: 1 }")
              : null !== (n = sn[t]) && void 0 !== n
              ? n
              : null;
          },
          function (e) {
            return e.switchAt && bn;
          }
        ),
        jn = l.d.div(
          J || (J = Object(ce.a)(["\n  padding: ", ";\n"])),
          function (e) {
            var n,
              t = e.theme,
              i = e.padding;
            return Array.isArray(i)
              ? []
                  .concat(i)
                  .map(function (e) {
                    return t.space[e];
                  })
                  .join(" ")
              : null !== (n = t.space[i]) && void 0 !== n
              ? n
              : t.space[4];
          }
        ),
        hn = l.d.div(
          K ||
            (K = Object(ce.a)([
              "\n  max-width: ",
              ";\n  margin: 0 auto;\n  /* overflow: hidden; */\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            return e.maxWidth;
          },
          function (e) {
            return (
              e.centerChildren &&
              "\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  "
            );
          },
          function (e) {
            return e.centerText && "\n    text-align: center;\n  ";
          }
        ),
        fn = l.d.div.attrs(function (e) {
          var n = e.children,
            t = e.top,
            i = e.bottom;
          return {
            children: Object(Be.jsxs)(Be.Fragment, {
              children: [
                t && Object(Be.jsx)("div", { children: t }),
                Object(Be.jsx)("div", { "data-cover-child": !0, children: n }),
                i && Object(Be.jsx)("div", { children: i }),
              ],
            }),
          };
        })(
          Q ||
            (Q = Object(ce.a)([
              "\n  display: grid;\n  gap: ",
              ";\n  min-block-size: ",
              ";\n  grid-template-rows: ",
              ";\n\n  > [data-cover-child] {\n    /* Options: stretch, center, start, end (See: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) */\n    align-self: ",
              ";\n  }\n",
            ])),
          function (e) {
            var n,
              t = e.theme,
              i = e.gap;
            return null !== (n = t.space[i]) && void 0 !== n ? n : "1rem";
          },
          function (e) {
            var n = e.minHeight;
            return null !== n && void 0 !== n ? n : "100vh";
          },
          function (e) {
            var n = e.top,
              t = e.bottom;
            return n && t
              ? "auto 1fr auto"
              : n
              ? "auto 1fr"
              : t
              ? "1fr auto"
              : "1fr";
          },
          function (e) {
            var n = e.alignChild;
            return null !== n && void 0 !== n ? n : "center";
          }
        );
      function xn(e) {
        var n = e.isOpen,
          t = e.setIsOpen,
          a = e.toggle,
          r = e.children,
          o = e.disabled,
          s = Object(i.useRef)(null);
        return (
          Object(an.a)(s, function () {
            n && t(!1);
          }),
          Object(Be.jsxs)(wn, {
            ref: s,
            children: [
              a({
                isActive: n,
                disabled: o,
                type: "button",
                onClick: function () {
                  return t(!n);
                },
              }),
              n && r,
            ],
          })
        );
      }
      var yn,
        gn,
        On,
        vn,
        wn = l.d.div(
          _ ||
            (_ = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n  position: relative;\n",
            ]))
        ),
        kn = Object(l.d)(jn)(
          $ ||
            ($ = Object(ce.a)([
              "\n  position: absolute;\n  top: ",
              ";\n  right: 0;\n  ",
              ";\n  border: 1px solid ",
              ";\n  border-radius: ",
              ";\n  background-color: #fff;\n  font-size: inherit;\n  z-index: 1;\n",
            ])),
          function (e) {
            var n = e.theme,
              t = e.top;
            return null !== t && void 0 !== t ? t : n.space[6];
          },
          function (e) {
            var n = e.width;
            return n ? "width: ".concat(n, ";") : "min-width: 200px;";
          },
          function (e) {
            return e.theme.colors.brightGray;
          },
          function (e) {
            return e.theme.borderRadius;
          }
        ),
        An = t.p + "static/media/metamask.dd02418a.svg";
      function Cn(e) {
        var n = e.account,
          t = e.disconnect,
          a = e.isFullWidth,
          r = Object(i.useState)(!1),
          o = Object(W.a)(r, 2),
          s = o[0],
          c = o[1];
        return Object(Be.jsx)(xn, {
          isOpen: s,
          setIsOpen: c,
          toggle: function (e) {
            return Object(Be.jsxs)(
              Rn,
              Object(ke.a)(
                Object(ke.a)({ isFullWidth: a }, e),
                {},
                {
                  children: [
                    Object(Be.jsx)("img", { src: An, alt: "metamask-icon" }),
                    Object(Be.jsx)("span", { children: Ze(n) }),
                    Object(Be.jsx)(En, {
                      children: s
                        ? Object(Be.jsx)(Ae.a, { size: 16 })
                        : Object(Be.jsx)(Ce.a, { size: 16 }),
                    }),
                  ],
                }
              )
            );
          },
          children: Object(Be.jsx)(Dn, {
            top: "3.25rem",
            padding: [2, 2],
            width: "180px",
            onClick: t,
            children: Object(Be.jsx)(Ln, { children: "Disconnect" }),
          }),
        });
      }
      var Tn,
        Mn,
        En = l.d.div(
          yn ||
            (yn = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n  flex-grow: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n",
            ]))
        ),
        Rn = l.d.button(
          gn ||
            (gn = Object(ce.a)([
              "\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n\n  border: 1px solid ",
              ";\n  border-radius: ",
              ";\n  background: ",
              ";\n  padding: 0.65rem 0.75rem;\n\n  font-size: inherit;\n  font-weight: 500;\n  color: inherit;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  line-height: inherit;\n  cursor: pointer;\n  user-select: none;\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      border-color: ",
              ";\n    }\n  }\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            return e.theme.colors.brightGray;
          },
          function (e) {
            return e.theme.borderRadius;
          },
          function (e) {
            return e.theme.colors.whitePrimary;
          },
          function (e) {
            return e.theme.colors.brandPrimary;
          },
          function (e) {
            var n = e.isActive,
              t = e.theme;
            return (
              n &&
              "\n      border-color: ".concat(t.colors.brandPrimary, ";\n    ")
            );
          },
          function (e) {
            return e.isFullWidth && "\n      width: 100%;\n    ";
          }
        ),
        Dn = Object(l.d)(kn)(
          On ||
            (On = Object(ce.a)([
              "\n  display: flex;\n  justify-content: center;\n",
            ]))
        ),
        Ln = l.d.button(
          vn ||
            (vn = Object(ce.a)([
              "\n  border: none;\n  border-radius: 3px;\n  background-color: transparent;\n  width: 100%;\n  padding: 0.25rem;\n  color: ",
              ";\n  text-align: center;\n  font-size: inherit;\n  cursor: pointer;\n  transition: background-color 300ms;\n\n  &:hover,\n  &:focus {\n    background-color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.font;
          },
          function (e) {
            return e.theme.colors.lightBrandPrimary;
          }
        );
      function Fn(e) {
        var n = e.clickHandler,
          t = e.isActive;
        return Object(Be.jsx)(Sn, {
          onClick: n,
          isActive: t,
          children: Object(Be.jsx)(Bn, {}),
        });
      }
      var zn,
        Sn = l.d.button(
          Tn ||
            (Tn = Object(ce.a)([
              "\n  /* display: flex;\n  justify-content: center;\n  align-items: center; */\n  background: transparent;\n  width: 25px;\n  height: 20px;\n  border: none;\n  cursor: pointer;\n\n  &:focus {\n    /* outline: none; */\n  }\n\n  ",
              "\n",
            ])),
          function (e) {
            return (
              e.isActive &&
              "\n      // Toggler Animation\n      & > div {\n        transform: rotate(135deg);\n\n        // Creates 'X' Toggler Animation\n        ::before {\n          top: 0;\n          transform: rotate(90deg);\n        }\n\n        ::after {\n          height: 0px;\n        }\n      }\n\n      // Rotate On Hover When Checked\n      &:hover > div {\n        transform: rotate(225deg);\n      }\n    "
            );
          }
        ),
        Bn = l.d.div(
          Mn ||
            (Mn = Object(ce.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 2px;\n  background: ",
              ";\n  transition: all 0.4s ease;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    top: -7px;\n    left: 0px;\n    width: 100%;\n    height: 2px;\n    background: ",
              ";\n    z-index: 1;\n  }\n\n  &::after {\n    top: 7px;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.font;
          },
          function (e) {
            return e.theme.colors.font;
          }
        );
      var Pn = l.d.div(
          zn ||
            (zn = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n\n  & > svg {\n    width: 183px;\n    height: 32px;\n    margin: 0.5rem 0;\n  }\n",
            ]))
        ),
        In = function (e) {
          var n = e.color,
            t = void 0 === n ? se.colors.logo : n;
          return Object(Be.jsx)(Pn, {
            children: Object(Be.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "1101",
              height: "193",
              viewBox: "0 0 1101 193",
              fill: "none",
              children: [
                Object(Be.jsxs)("g", {
                  clipPath: "url(#clip0_176_3)",
                  children: [
                    Object(Be.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M105.03 0H52.515C45.6186 -2.05528e-07 38.7898 1.35835 32.4184 3.99747C26.047 6.63659 20.2577 10.5048 15.3813 15.3813C10.5048 20.2577 6.63662 26.0469 3.9975 32.4183C1.35837 38.7898 0 45.6186 0 52.515C0 59.4113 1.35837 66.2402 3.9975 72.6116C6.63662 78.983 10.5048 84.7722 15.3813 89.6487C20.2577 94.5251 26.047 98.3933 32.4184 101.032C38.7898 103.672 45.6186 105.03 52.515 105.03H105.03C118.958 105.03 132.315 99.4971 142.164 89.6487C152.012 79.8002 157.545 66.4428 157.545 52.515C157.545 38.5871 152.012 25.2297 142.164 15.3813C132.315 5.53281 118.958 4.15082e-07 105.03 0V0ZM114.056 87.7471H43.4719C34.1277 87.7471 25.1663 84.0352 18.5589 77.4279C11.9516 70.8206 8.23966 61.8591 8.23966 52.515C8.23966 43.1708 11.9516 34.2094 18.5589 27.602C25.1663 20.9947 34.1277 17.2828 43.4719 17.2828H114.056C118.683 17.2828 123.264 18.194 127.539 19.9646C131.813 21.7352 135.697 24.3304 138.969 27.602C142.241 30.8736 144.836 34.7576 146.606 39.0322C148.377 43.3067 149.288 47.8882 149.288 52.515C149.288 57.1417 148.377 61.7232 146.606 65.9978C144.836 70.2723 142.241 74.1563 138.969 77.4279C135.697 80.6995 131.813 83.2947 127.539 85.0653C123.264 86.8359 118.683 87.7471 114.056 87.7471V87.7471Z",
                      fill: t,
                    }),
                    Object(Be.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M105.028 87.7468H52.5132C45.5382 87.621 38.6081 88.8861 32.1275 91.4682C25.6469 94.0504 19.7457 97.8979 14.7685 102.786C9.79141 107.674 5.8381 113.505 3.13942 119.938C0.440736 126.371 -0.949219 133.277 -0.949219 140.253C-0.949219 147.229 0.440736 154.136 3.13942 160.568C5.8381 167.001 9.79141 172.832 14.7685 177.72C19.7457 182.609 25.6469 186.456 32.1275 189.038C38.6081 191.62 45.5382 192.886 52.5132 192.76H105.028C118.79 192.511 131.904 186.87 141.548 177.05C151.192 167.231 156.596 154.017 156.596 140.253C156.596 126.489 151.192 113.276 141.548 103.456C131.904 93.6363 118.79 87.9951 105.028 87.7468V87.7468ZM114.054 175.494H43.4701C34.126 175.494 25.1645 171.782 18.5572 165.175C11.9498 158.567 8.23789 149.606 8.23789 140.262C8.23789 130.918 11.9498 121.956 18.5572 115.349C25.1645 108.742 34.126 105.03 43.4701 105.03H114.054C118.681 105.03 123.262 105.941 127.537 107.712C131.812 109.482 135.696 112.077 138.967 115.349C142.239 118.621 144.834 122.504 146.604 126.779C148.375 131.054 149.286 135.635 149.286 140.262C149.286 144.889 148.375 149.47 146.604 153.745C144.834 158.019 142.239 161.903 138.967 165.175C135.696 168.446 131.812 171.042 127.537 172.812C123.262 174.583 118.681 175.494 114.054 175.494V175.494Z",
                      fill: t,
                    }),
                    Object(Be.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M105.028 43.8826H52.5132C45.5382 43.7567 38.6081 45.0219 32.1275 47.604C25.6469 50.1862 19.7457 54.0337 14.7685 58.9218C9.79141 63.81 5.8381 69.6408 3.13942 76.0738C0.440736 82.5067 -0.949219 89.4129 -0.949219 96.389C-0.949219 103.365 0.440736 110.271 3.13942 116.704C5.8381 123.137 9.79141 128.968 14.7685 133.856C19.7457 138.744 25.6469 142.592 32.1275 145.174C38.6081 147.756 45.5382 149.021 52.5132 148.895H105.028C118.79 148.647 131.904 143.006 141.548 133.186C151.192 123.366 156.596 110.153 156.596 96.389C156.596 82.6253 151.192 69.4117 141.548 59.5918C131.904 49.772 118.79 44.1309 105.028 43.8826ZM114.054 131.63H43.4701C34.2581 131.427 25.4917 127.625 19.0483 121.038C12.605 114.451 8.997 105.603 8.997 96.389C8.997 87.1748 12.605 78.3268 19.0483 71.7399C25.4917 65.1531 34.2581 61.3511 43.4701 61.1482H114.054C118.747 61.0449 123.414 61.88 127.78 63.6046C132.146 65.3291 136.124 67.9084 139.479 71.1911C142.835 74.4737 145.501 78.3936 147.322 82.7206C149.142 87.0477 150.08 91.6947 150.08 96.389C150.08 101.083 149.142 105.73 147.322 110.057C145.501 114.384 142.835 118.304 139.479 121.587C136.124 124.87 132.146 127.449 127.78 129.173C123.414 130.898 118.747 131.733 114.054 131.63V131.63Z",
                      fill: t,
                    }),
                    Object(Be.jsx)("path", {
                      d: "M444.941 161.545H414.171C396.942 161.545 380.42 154.701 368.237 142.519C356.055 130.336 349.211 113.813 349.211 96.5849C349.211 79.3565 356.055 62.8337 368.237 50.6513C380.42 38.469 396.942 31.625 414.171 31.625H444.941C462.17 31.625 478.693 38.469 490.875 50.6513C503.057 62.8337 509.901 79.3565 509.901 96.5849C509.901 113.813 503.057 130.336 490.875 142.519C478.693 154.701 462.17 161.545 444.941 161.545V161.545ZM414.171 55.5576C403.29 55.5576 392.854 59.8801 385.16 67.5742C377.466 75.2684 373.144 85.7038 373.144 96.5849C373.144 107.466 377.466 117.901 385.16 125.596C392.854 133.29 403.29 137.612 414.171 137.612H444.941C455.822 137.612 466.258 133.29 473.952 125.596C481.646 117.901 485.969 107.466 485.969 96.5849C485.969 85.7038 481.646 75.2684 473.952 67.5742C466.258 59.8801 455.822 55.5576 444.941 55.5576H414.171Z",
                      fill: t,
                    }),
                    Object(Be.jsx)("path", {
                      d: "M923.012 54.7881V32.377H815.127V160.792H923.012V138.381H837.538V109.235H888.241V86.8236H837.538V54.7881H923.012Z",
                      fill: t,
                    }),
                    Object(Be.jsx)("path", {
                      d: "M1047.89 96.5847C1048.02 96.456 1048.14 96.319 1048.25 96.1744L1100.05 32.377H1071.17L1030.85 82.0542C1030 83.0901 1028.94 83.9254 1027.74 84.499C1026.53 85.0727 1025.21 85.3704 1023.88 85.3704C1022.55 85.3704 1021.23 85.0727 1020.02 84.499C1018.82 83.9254 1017.76 83.0901 1016.91 82.0542L976.604 32.377H947.731L999.511 96.1915L999.887 96.5847L999.511 96.9779L947.766 160.758H976.621L1016.91 111.098C1017.76 110.062 1018.82 109.227 1020.02 108.653C1021.23 108.08 1022.55 107.782 1023.88 107.782C1025.21 107.782 1026.53 108.08 1027.74 108.653C1028.94 109.227 1030 110.062 1030.85 111.098L1071.14 160.758H1100.01L1048.25 96.9779L1047.89 96.5847Z",
                      fill: t,
                    }),
                    Object(Be.jsx)("path", {
                      d: "M790.408 32.377H681.275V54.7881H724.628V160.741H747.039V54.7881H790.408V32.377Z",
                      fill: t,
                    }),
                    Object(Be.jsx)("path", {
                      d: "M630.572 135.475L614.041 109.235H618.213C628.414 109.235 638.197 105.182 645.41 97.9692C652.623 90.756 656.676 80.9727 656.676 70.7717C656.676 60.5706 652.623 50.7874 645.41 43.5742C638.197 36.3609 628.414 32.3086 618.213 32.3086H537.115V54.7198H618.11C622.358 54.7198 626.432 56.4073 629.436 59.4112C632.44 62.4151 634.128 66.4894 634.128 70.7375C634.128 74.9857 632.44 79.0599 629.436 82.0638C626.432 85.0677 622.358 86.7553 618.11 86.7553H559.338C553.444 86.7553 547.792 89.0966 543.624 93.2643C539.457 97.4319 537.115 103.084 537.115 108.978V160.69H559.526V109.235H587.374L611.648 147.459C614.218 151.551 617.786 154.922 622.018 157.254C626.25 159.587 631.005 160.804 635.837 160.792H655.171V138.381H635.837C634.786 138.381 633.751 138.115 632.83 137.607C631.909 137.098 631.133 136.365 630.572 135.475V135.475Z",
                      fill: t,
                    }),
                    Object(Be.jsx)("path", {
                      d: "M329.467 160.792H285.824C268.804 160.792 252.481 154.031 240.446 141.996C228.412 129.962 221.65 113.639 221.65 96.6189C221.65 79.599 228.412 63.2762 240.446 51.2413C252.481 39.2065 268.804 32.4453 285.824 32.4453H329.484V54.8394H285.824C274.892 55.0605 264.482 59.5586 256.829 67.3681C249.176 75.1775 244.89 85.676 244.89 96.6103C244.89 107.545 249.176 118.043 256.829 125.853C264.482 133.662 274.892 138.16 285.824 138.381H329.484L329.467 160.792Z",
                      fill: t,
                    }),
                  ],
                }),
                Object(Be.jsx)("defs", {
                  children: Object(Be.jsx)("clipPath", {
                    id: "clip0_176_3",
                    children: Object(Be.jsx)("rect", {
                      width: "1100.03",
                      height: "192.76",
                      fill: t,
                    }),
                  }),
                }),
              ],
            }),
          });
        };
      function Vn(e) {
        return {
          wallets: {
            isOpen: x(function (e) {
              return e.isWalletsModalOpen;
            }),
            setIsOpen: x(function (e) {
              return e.setIsWalletsModalOpen;
            }),
            payload: x(function (e) {
              return e.walletsModalPayload;
            }),
            setPayload: x(function (e) {
              return e.setWalletsModalPayload;
            }),
          },
          confirm: {
            isOpen: x(function (e) {
              return e.isConfirmModalOpen;
            }),
            setIsOpen: x(function (e) {
              return e.setIsConfirmModalOpen;
            }),
            payload: x(function (e) {
              return e.confirmModalPayload;
            }),
            setPayload: x(function (e) {
              return e.setConfirmModalPayload;
            }),
          },
        }[e];
      }
      var Wn,
        Hn = t(74),
        Nn = [
          "children",
          "variant",
          "color",
          "size",
          "isRound",
          "isFullWidth",
          "isLoading",
          "disabled",
        ],
        Un = Object(i.forwardRef)(function (e, n) {
          var t = e.children,
            i = e.variant,
            a = e.color,
            r = e.size,
            o = e.isRound,
            s = e.isFullWidth,
            c = e.isLoading,
            d = e.disabled,
            l = void 0 !== d && d,
            u = Object(Hn.a)(e, Nn);
          return Object(Be.jsx)(
            Gn,
            Object(ke.a)(
              Object(ke.a)(
                {
                  ref: n,
                  type: "button",
                  variant: i,
                  color: a,
                  size: r,
                  isRound: o,
                  isFullWidth: s,
                  disabled: l,
                  isLoading: c,
                },
                u
              ),
              {},
              {
                children: c
                  ? Object(Be.jsx)(Se.ClipLoader, {
                      size: "small" === r ? 12 : 16,
                      color: se.colors.whitePrimary,
                    })
                  : t,
              }
            )
          );
        });
      Un.defaultProps = {
        variant: "contained",
        color: "brandPrimary",
        size: "medium",
        isFullWidth: !1,
      };
      var Xn,
        Gn = l.d.button(
          Wn ||
            (Wn = Object(ce.a)([
              "\n  display: ",
              ";\n  width: ",
              ";\n  min-width: 115px;\n  border: 1px solid transparent;\n  border-radius: ",
              ";\n  font-weight: inherit;\n  color: ",
              ";\n  text-align: center;\n  letter-spacing: 1px;\n  font-family: 'Aeonik Bold';\n  font-weight: 700;\n  line-height: initial;\n  cursor: pointer;\n  user-select: none;\n\n  ",
              "\n\n  ",
              "\n\n  ",
              "\n",
            ])),
          function (e) {
            return e.isFullWidth ? "block" : "inline-block";
          },
          function (e) {
            return e.isFullWidth && "100%";
          },
          function (e) {
            var n = e.isRound,
              t = e.theme;
            return n && t.borderRadius;
          },
          function (e) {
            return e.theme.colors.whitePrimary;
          },
          function (e) {
            var n = e.size;
            return "large" === n
              ? "\n        padding: 0.75rem 2rem;\n        font-size: 1.2rem;\n      "
              : "small" === n
              ? "\n        padding: 0.5rem .75rem;\n        font-size: .875rem;\n      "
              : "\n      padding: 0.65rem 0.75rem;\n      font-size: 1rem;\n    ";
          },
          function (e) {
            var n = e.theme,
              t = e.variant,
              i = e.color;
            return "contained" === t
              ? "\n        background-color: "
                  .concat(
                    n.colors["".concat(i)],
                    ";\n\n        &:hover {\n          background-color: transparent;\n          border-color: "
                  )
                  .concat(n.colors["".concat(i)], ";\n          color:  ")
                  .concat(
                    n.colors["".concat(i)],
                    ";\n        }\n\n        &:disabled {\n          background-color: "
                  )
                  .concat(n.colors.brightGray, ";\n          border-color: ")
                  .concat(n.colors.brightGray, ";\n          color: ")
                  .concat(
                    n.colors.whitePrimary,
                    ";\n          cursor: not-allowed;\n        }\n      "
                  )
              : "outlined" === t
              ? "\n        background-color: transparent;\n        border-color: "
                  .concat(n.colors["".concat(i)], ";\n        color:  ")
                  .concat(
                    n.colors["".concat(i)],
                    ";\n\n        &:hover {\n          background-color: "
                  )
                  .concat(
                    n.colors["".concat(i)],
                    ";\n          border-color: transparent;\n          color: "
                  )
                  .concat(
                    n.colors.background,
                    ";\n        }\n\n        &:disabled {\n          background-color: "
                  )
                  .concat(n.colors.brightGray, ";\n          border-color: ")
                  .concat(n.colors.brightGray, ";\n          color: ")
                  .concat(
                    n.colors.whitePrimary,
                    ";\n          cursor: not-allowed;\n        }\n      "
                  )
              : "text" === t
              ? "\n        background-color: transparent;\n        border-color: transparent;\n        color:  ".concat(
                  n.colors["".concat(i)],
                  ";\n\n        &:hover {\n          text-decoration: underline;\n        }\n      "
                )
              : void 0;
          },
          function (e) {
            var n = e.variant,
              t = e.theme;
            if ("icon" === n)
              return "\n        min-width: initial;\n        padding: 0;\n        border-color: transparent;\n        background-color: transparent;\n        color:  ".concat(
                t.colors.font,
                ";\n      "
              );
          }
        );
      function Zn(e) {
        var n = Vn("wallets").setIsOpen,
          t = f(function (e) {
            return e.isDrawerOpen;
          }),
          i = f(function (e) {
            return e.setIsDrawerOpen;
          });
        return Object(Be.jsx)(
          Qn,
          Object(ke.a)(
            Object(ke.a)(
              {
                isRound: !0,
                onClick: function () {
                  n(!0), t && i(!1);
                },
              },
              e
            ),
            {},
            { children: "Connect Wallet" }
          )
        );
      }
      var Yn,
        qn,
        Jn,
        Kn,
        Qn = Object(l.d)(Un)(
          Xn || (Xn = Object(ce.a)(["\n  width: ", ";\n"])),
          function (e) {
            return !e.isFullWidth && "210px";
          }
        );
      function _n() {
        var e = Object(c.c)(),
          n = e.account,
          t = e.deactivate,
          a = f(function (e) {
            return e.isDrawerOpen;
          }),
          r = f(
            Object(i.useCallback)(function (e) {
              return e.setIsDrawerOpen;
            }, [])
          ),
          o = Object(ve.a)("(min-width: 851px)");
        return (
          Object(i.useEffect)(
            function () {
              a && o && r(!1);
            },
            [o, a, r]
          ),
          a
            ? Object(Be.jsx)(at, {
                isOpen: a,
                children: Object(Be.jsxs)(cn, {
                  gap: 6,
                  children: [
                    Object(Be.jsx)(rt, {
                      children: n
                        ? Object(Be.jsx)(Cn, {
                            isFullWidth: !0,
                            account: n,
                            disconnect: function () {
                              t();
                            },
                          })
                        : Object(Be.jsx)(Zn, {
                            isFullWidth: !0,
                            style: { padding: "1rem" },
                          }),
                    }),
                    Object(Be.jsxs)(ot, {
                      children: [
                        Object(Be.jsx)(st, { to: "/home", children: "Home" }),
                        Object(Be.jsx)(st, {
                          to: "/deposit",
                          children: "Deposit",
                        }),
                        Object(Be.jsx)(st, {
                          to: "/lock-cxd",
                          children: "Lock CXD",
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : null
        );
      }
      var $n,
        et,
        nt,
        tt,
        it,
        at = l.d.div(
          Yn ||
            (Yn = Object(ce.a)([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: ",
              ";\n  padding: 0 1.5rem;\n  padding-top: 80px; // Factors in Header 80px\n  transform: translateX(-100%);\n  transition: transform 0.3s ease-out; // Defines how available time be distributed; start fast and end slow\n  z-index: 2;\n\n  ",
              "\n\n  @media (min-width: 501px) {\n    padding: 0 2rem;\n    padding-top: 80px; // Factors in Header 80px\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.background;
          },
          function (e) {
            return e.isOpen && "\n        transform: translateX(0);\n      ";
          }
        ),
        rt = l.d.div(
          qn ||
            (qn = Object(ce.a)([
              "\n  border-bottom: 1px solid ",
              ";\n  padding-bottom: 1rem;\n",
            ])),
          function (e) {
            return e.theme.colors.brightGray;
          }
        ),
        ot = l.d.div(
          Jn ||
            (Jn = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n  display: grid;\n  justify-content: center;\n  gap: 1.5rem;\n  text-align: center;\n",
            ]))
        ),
        st = Object(l.d)(s.c)(
          Kn ||
            (Kn = Object(ce.a)([
              "\n  font-size: 1.25rem;\n  font-weight: 500;\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      color: ",
              ";\n    }\n  }\n\n  &.active {\n    color: ",
              ";\n    font-weight: 700;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.brandPrimary;
          },
          function (e) {
            return e.theme.colors.brandPrimary;
          }
        );
      function ct() {
        var e = Object(c.c)(),
          n = e.deactivate,
          t = e.account,
          a = f(
            Object(i.useCallback)(function (e) {
              return e.isDrawerOpen;
            }, [])
          ),
          r = f(
            Object(i.useCallback)(function (e) {
              return e.setIsDrawerOpen;
            }, [])
          ),
          o = Object(ve.a)("(min-width: 851px)");
        return Object(Be.jsxs)(Be.Fragment, {
          children: [
            Object(Be.jsx)(ht, {
              removeBorder: a,
              children: Object(Be.jsxs)(ft, {
                justify: "spaceBetween",
                align: "center",
                children: [
                  Object(Be.jsx)(s.b, {
                    to: "/",
                    onClick: function () {
                      a && r(!1);
                    },
                    children: Object(Be.jsx)(In, {}),
                  }),
                  Object(Be.jsx)(xt, {
                    align: "center",
                    children: o
                      ? Object(Be.jsxs)(Be.Fragment, {
                          children: [
                            Object(Be.jsxs)(yt, {
                              gap: 7,
                              children: [
                                Object(Be.jsx)(gt, {
                                  to: "/home",
                                  children: "Home",
                                }),
                                Object(Be.jsx)(gt, {
                                  to: "/deposit",
                                  children: "Deposit",
                                }),
                                Object(Be.jsx)(gt, {
                                  to: "/lock-cxd",
                                  children: "Lock CXD",
                                }),
                              ],
                            }),
                            Object(Be.jsx)(mn, {
                              justify: "end",
                              children: t
                                ? Object(Be.jsx)(Cn, {
                                    account: t,
                                    disconnect: function () {
                                      n();
                                    },
                                  })
                                : Object(Be.jsx)(Zn, {}),
                            }),
                          ],
                        })
                      : Object(Be.jsx)(Fn, {
                          clickHandler: function () {
                            return r(!a);
                          },
                          isActive: a,
                        }),
                  }),
                ],
              }),
            }),
            Object(Be.jsx)(_n, {}),
          ],
        });
      }
      var dt,
        lt,
        ut,
        pt,
        bt,
        mt,
        jt,
        ht = l.d.div(
          $n ||
            ($n = Object(ce.a)([
              "\n  position: relative; // https://stackoverflow.com/questions/5218927/z-index-not-working-with-fixed-positioning\n  border-bottom: 1px solid\n    ",
              ";\n  height: 80px;\n  z-index: 3;\n",
            ])),
          function (e) {
            var n = e.theme;
            return e.removeBorder ? "transparent" : n.colors.brightGray;
          }
        ),
        ft = Object(l.d)(mn).attrs(function () {
          return { as: "nav" };
        })(
          et ||
            (et = Object(ce.a)([
              "\n  /* border: 1px solid orange; */\n  width: 100%;\n  height: 100%;\n",
            ]))
        ),
        xt = Object(l.d)(mn)(
          nt ||
            (nt = Object(ce.a)([
              "\n  /* border: 1px solid orange; */\n  height: 100%;\n\n  & > :not(:last-child) {\n    margin-right: ",
              ";\n  }\n",
            ])),
          function (e) {
            var n,
              t = e.theme,
              i = e.gap;
            return null !== (n = t.space[i]) && void 0 !== n ? n : "3rem";
          }
        ),
        yt = Object(l.d)(mn).attrs(function () {
          return { as: "nav" };
        })(
          tt ||
            (tt = Object(ce.a)([
              "\n  /* border: 1px solid green; */\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 100%;\n",
            ]))
        ),
        gt = Object(l.d)(s.c)(
          it ||
            (it = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n  border-bottom: 2px solid transparent;\n  display: grid;\n  place-items: center;\n  height: 100%;\n  font-weight: 500;\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      color: ",
              ";\n    }\n  }\n\n  &.active {\n    border-bottom: 2px solid ",
              ";\n    color: ",
              ";\n    font-weight: 700;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.brandPrimary;
          },
          function (e) {
            return e.theme.colors.brandPrimary;
          },
          function (e) {
            return e.theme.colors.brandPrimary;
          }
        ),
        Ot = t(85);
      function vt(e) {
        var n = e.navItems,
          t = Object(u.g)(),
          r = Object(i.useState)(!1),
          o = Object(W.a)(r, 2),
          s = o[0],
          c = o[1],
          d = f(
            Object(i.useCallback)(function (e) {
              return e.isDrawerOpen;
            }, [])
          ),
          l = f(
            Object(i.useCallback)(function (e) {
              return e.setIsDrawerOpen;
            }, [])
          ),
          p = Object(ve.a)("(min-width: 1141px)");
        Object(i.useEffect)(
          function () {
            d && p && (l(!1), c(!1));
          },
          [p, d, l]
        );
        return d
          ? Object(Be.jsx)(wt, {
              isOpen: d,
              children: Object(Be.jsxs)(cn, {
                gap: 6,
                children: [
                  Object(Be.jsx)(kt, {
                    children: Object(Be.jsx)(At, {
                      isFullWidth: !0,
                      onClick: function () {
                        t("/home"), l(!1);
                      },
                      isRound: !0,
                      children: "Launch App",
                    }),
                  }),
                  Object(Be.jsx)(Ct, {
                    children: n.map(function (e) {
                      return e.hash
                        ? Object(Be.jsxs)(
                            Mt,
                            {
                              smooth: !0,
                              to: e.hash,
                              onClick: function () {
                                return l(!1);
                              },
                              children: [" ", e.label, " "],
                            },
                            e.label
                          )
                        : Object(Be.jsxs)(
                            a.a.Fragment,
                            {
                              children: [
                                Object(Be.jsxs)(
                                  Tt,
                                  {
                                    href: e.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: function () {
                                      return null !== e && void 0 !== e && e.nav
                                        ? c(!s)
                                        : "";
                                    },
                                    children: [
                                      e.label,
                                      (null === e || void 0 === e
                                        ? void 0
                                        : e.nav) &&
                                        Object(Be.jsx)("svg", {
                                          width: "16",
                                          height: "17",
                                          viewBox: "0 0 16 17",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: Object(Be.jsx)("path", {
                                            d: "M4 6.5L8 10.5L12 6.5",
                                            stroke: "#1A202E",
                                            strokeWidth: "1.33333",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                          }),
                                        }),
                                    ],
                                  },
                                  "nav_" + e.label
                                ),
                                s &&
                                  (null === e || void 0 === e
                                    ? void 0
                                    : e.nav) &&
                                  (null === e || void 0 === e
                                    ? void 0
                                    : e.nav.map(function (e) {
                                        return Object(Be.jsx)(
                                          a.a.Fragment,
                                          {
                                            children: Object(Be.jsxs)(
                                              Tt,
                                              {
                                                href: e.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                style: {
                                                  display: "flex",
                                                  alignItems: "center",
                                                },
                                                children: [
                                                  Object(Be.jsxs)(Et, {
                                                    children: [
                                                      null === e || void 0 === e
                                                        ? void 0
                                                        : e.logo,
                                                      " ",
                                                    ],
                                                  }),
                                                  e.label,
                                                ],
                                              },
                                              "nav_" + e.label
                                            ),
                                          },
                                          e.label
                                        );
                                      })),
                              ],
                            },
                            e.label
                          );
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
      var wt = l.d.div(
          dt ||
            (dt = Object(ce.a)([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #f4f4f4;\n  padding: 0 1.5rem;\n  padding-top: 80px; // Factors in Header 80px\n  transform: translateX(-100%);\n  transition: transform 0.3s ease-out; // Defines how available time be distributed; start fast and end slow\n  z-index: 2;\n\n  ",
              "\n\n  @media (min-width: 501px) {\n    padding: 0 2rem;\n    padding-top: 80px; // Factors in Header 80px\n  }\n",
            ])),
          function (e) {
            return e.isOpen && "\n        transform: translateX(0);\n      ";
          }
        ),
        kt = l.d.div(
          lt ||
            (lt = Object(ce.a)([
              "\n  border-bottom: 1px solid ",
              ";\n  padding-bottom: 1rem;\n",
            ])),
          function (e) {
            return e.theme.colors.brightGray;
          }
        ),
        At = Object(l.d)(Un)(
          ut || (ut = Object(ce.a)(["\n  padding: 1rem;\n"]))
        ),
        Ct = l.d.div(
          pt ||
            (pt = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n  display: grid;\n  justify-content: center;\n  gap: 1.5rem;\n  text-align: center;\n",
            ]))
        ),
        Tt = l.d.a(
          bt ||
            (bt = Object(ce.a)([
              "\n  font-size: 1.25rem;\n  font-weight: 500;\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      color: ",
              ";\n    }\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.brandPrimary;
          }
        ),
        Mt = Object(l.d)(Ot.a)(
          mt ||
            (mt = Object(ce.a)([
              "\n  font-size: 1.25rem;\n  font-weight: 500;\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      color: ",
              ";\n    }\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.brandPrimary;
          }
        ),
        Et = l.d.div(
          jt ||
            (jt = Object(ce.a)([
              "\n  height: 14px;\n  width: 22.86px;\n  margin-right: 6.5px;\n  svg {\n    height: 100%;\n    margin: 0 auto;\n    width: auto;\n    display: block;\n  }\n",
            ]))
        );
      var Rt = function () {
        return Object(Be.jsx)("svg", {
          viewBox: "0 -1 32 32",
          xmlns: "http://www.w3.org/2000/svg",
          width: "32px",
          children: Object(Be.jsx)("path", {
            d: "M31.275 5.924c-.503.223-1.02.411-1.548.564a6.842 6.842 0 0 0 1.393-2.45.516.516 0 0 0-.755-.6 12.181 12.181 0 0 1-3.6 1.422 6.904 6.904 0 0 0-4.809-1.96 6.877 6.877 0 0 0-6.813 7.757A17.587 17.587 0 0 1 3.072 4.253a.516.516 0 0 0-.846.067 6.866 6.866 0 0 0-.93 3.454c0 1.655.59 3.225 1.634 4.452a5.816 5.816 0 0 1-.919-.41.516.516 0 0 0-.767.44v.091c0 2.47 1.33 4.695 3.362 5.908a5.882 5.882 0 0 1-.522-.076.516.516 0 0 0-.588.664 6.867 6.867 0 0 0 5.032 4.605 12.153 12.153 0 0 1-6.497 1.854c-.486 0-.976-.029-1.455-.085a.517.517 0 0 0-.339.946A18.525 18.525 0 0 0 10.255 29.1c6.994 0 11.37-3.298 13.808-6.065 3.041-3.45 4.785-8.016 4.785-12.528 0-.189-.003-.38-.009-.569a13.355 13.355 0 0 0 3.074-3.255.516.516 0 0 0-.638-.759Z",
          }),
        });
      };
      var At = function () {
        return Object(Be.jsx)("svg", {
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          width: "32px",
          children: Object(Be.jsx)("path", {
            d: "M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z",
          }),
        });
      };
      var Dt,
        Lt,
        Ft,
        zt,
        St,
        Bt,
        Pt,
        It,
        Vt,
        Wt,
        Ht,
        Nt = function () {
          return Object(Be.jsx)("svg", {
            width: "24",
            height: "14",
            viewBox: "0 0 24 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: Object(Be.jsx)("path", {
              d: "M7.0178 0.713867C10.5781 0.713867 13.4641 3.52823 13.4641 6.99969C13.4641 10.4711 10.5779 13.2853 7.0178 13.2853C3.4577 13.2853 0.571289 10.4711 0.571289 6.99969C0.571289 3.52823 3.45748 0.713867 7.0178 0.713867ZM17.3124 1.08207C19.0926 1.08207 20.5357 3.73121 20.5357 6.99969H20.5359C20.5359 10.2673 19.0928 12.9173 17.3126 12.9173C15.5325 12.9173 14.0894 10.2673 14.0894 6.99969C14.0894 3.73206 15.5323 1.08207 17.3124 1.08207ZM22.2948 1.69844C22.9208 1.69844 23.4284 4.07185 23.4284 6.99969C23.4284 9.92668 22.921 12.3009 22.2948 12.3009C21.6686 12.3009 21.1614 9.92732 21.1614 6.99969C21.1614 4.07206 21.6689 1.69844 22.2948 1.69844Z",
              fill: "#1A202E",
            }),
          });
        },
        Ut = [
          {
            label: "Medium",
            url: "https://medium.com/@CortexDAO",
            logo: Object(Be.jsx)(Nt, {}),
          },
          {
            label: "Twitter",
            url: "https://twitter.com/CortexDAO",
            logo: Object(Be.jsx)(Rt, {}),
          },
          {
            label: "Telegram",
            url: "https://t.me/cortexdao",
            logo: Object(Be.jsx)(At, {}),
          },
        ],
        Xt = [
          { label: "Protocol", hash: "/#protocol" },
          { label: "Tokenomics", hash: "/#tokenomics" },
          { label: "DAO", hash: "/#dao" },
          { label: "CXD Token", hash: "/#cxd-token" },
        ],
        Gt = function (e) {
          var n = e.item;
          return n.hash
            ? Object(Be.jsx)($t, {
                children: Object(Be.jsx)(ni, {
                  smooth: !0,
                  to: n.hash,
                  children: n.label,
                }),
              })
            : Object(Be.jsxs)($t, {
                children: [
                  Object(Be.jsxs)(ei, {
                    href: n.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    isSubNav: null === n || void 0 === n ? void 0 : n.nav,
                    children: [
                      n.label,
                      " ",
                      (null === n || void 0 === n ? void 0 : n.nav) &&
                        Object(Be.jsx)("svg", {
                          width: "16",
                          height: "17",
                          viewBox: "0 0 16 17",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: Object(Be.jsx)("path", {
                            d: "M4 6.5L8 10.5L12 6.5",
                            stroke: "#1A202E",
                            strokeWidth: "1.33333",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                        }),
                    ],
                  }),
                  (null === n || void 0 === n ? void 0 : n.nav) &&
                    Object(Be.jsx)(Kt, {
                      children:
                        null === n || void 0 === n
                          ? void 0
                          : n.nav.map(function (e) {
                              return Object(Be.jsxs)(
                                Qt,
                                {
                                  href: e.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: [
                                    Object(Be.jsxs)(ti, {
                                      children: [
                                        null === e || void 0 === e
                                          ? void 0
                                          : e.logo,
                                        " ",
                                      ],
                                    }),
                                    e.label,
                                  ],
                                },
                                "nav_" + e.label
                              );
                            }),
                    }),
                ],
              });
        };
      function Zt() {
        var e = Object(u.g)(),
          n = f(
            Object(i.useCallback)(function (e) {
              return e.isDrawerOpen;
            }, [])
          ),
          t = f(
            Object(i.useCallback)(function (e) {
              return e.setIsDrawerOpen;
            }, [])
          ),
          a = Object(ve.a)("(max-width: 1140px)");
        return Object(Be.jsxs)(Be.Fragment, {
          children: [
            Object(Be.jsx)(Yt, {
              children: Object(Be.jsxs)(qt, {
                justify: "spaceBetween",
                align: "center",
                children: [
                  Object(Be.jsx)(s.b, {
                    to: "/",
                    onClick: function () {
                      n && t(!1);
                    },
                    children: Object(Be.jsx)(In, {}),
                  }),
                  Object(Be.jsx)(Jt, {
                    align: "center",
                    children: a
                      ? Object(Be.jsx)(Fn, {
                          clickHandler: function () {
                            return t(!n);
                          },
                          isActive: n,
                        })
                      : Object(Be.jsxs)(Be.Fragment, {
                          children: [
                            Object(Be.jsx)(_t, {
                              gap: a && 5,
                              children: Xt.map(function (e) {
                                return Object(Be.jsx)(
                                  Gt,
                                  { item: e },
                                  "nav_" + e.label
                                );
                              }),
                            }),
                            Object(Be.jsx)(mn, {
                              justify: "end",
                              children: Object(Be.jsx)(ii, {
                                onClick: function () {
                                  return e("/home");
                                },
                                isRound: !0,
                                children: "Launch App",
                              }),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
            Object(Be.jsx)(vt, { navItems: Xt }),
          ],
        });
      }
      var Yt = l.d.div(
          Dt ||
            (Dt = Object(ce.a)([
              "\n  position: relative; // https://stackoverflow.com/questions/5218927/z-index-not-working-with-fixed-positioning\n  border-bottom: 1px solid transparent;\n  height: 80px;\n  z-index: 3;\n  padding: 0 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n",
            ]))
        ),
        qt = Object(l.d)(mn).attrs(function () {
          return { as: "nav" };
        })(
          Lt ||
            (Lt = Object(ce.a)([
              "\n  /* border: 1px solid orange; */\n  width: 100%;\n  height: 100%;\n",
            ]))
        ),
        Jt = Object(l.d)(mn)(
          Ft ||
            (Ft = Object(ce.a)([
              "\n  /* border: 1px solid orange; */\n  height: 100%;\n\n  & > :not(:last-child) {\n    margin-right: ",
              ";\n  }\n",
            ])),
          function (e) {
            var n,
              t = e.theme,
              i = e.gap;
            return null !== (n = t.space[i]) && void 0 !== n ? n : "3rem";
          }
        ),
        Kt = l.d.div(
          zt ||
            (zt = Object(ce.a)([
              "\n  display: none;\n  transition: 0.25s;\n  position: absolute;\n  // margin-top: 12px;\n  background: #ffffff;\n  box-shadow: 0px 4px 12px rgba(43, 31, 79, 0.07);\n  border-radius: 10px;\n  padding: 12px;\n  min-width: 122px;\n",
            ]))
        ),
        Qt = l.d.a(
          St ||
            (St = Object(ce.a)([
              "\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 7px 0;\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      color: ",
              ";\n    }\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.brandPrimary;
          }
        ),
        _t = Object(l.d)(mn).attrs(function () {
          return { as: "nav" };
        })(
          Bt ||
            (Bt = Object(ce.a)([
              "\n  /* border: 1px solid green; */\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* width: 210px; */\n  height: 100%;\n\n  & > :not(:last-child) {\n    margin-right: ",
              ";\n  }\n",
            ])),
          function (e) {
            var n,
              t = e.theme,
              i = e.gap;
            return null !== (n = t.space[i]) && void 0 !== n ? n : "3rem";
          }
        ),
        $t = l.d.div(
          Pt ||
            (Pt = Object(ce.a)([
              "\n  position: relative;\n  @media (hover: hover) and (pointer: fine) {\n    &:hover ",
              " {\n      display: block;\n    }\n  }\n",
            ])),
          Kt
        ),
        ei = l.d.a(
          It ||
            (It = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n  display: grid;\n  place-items: center;\n  /* height: 100%; */\n  font-weight: 500;\n  cursor: pointer;\n  padding: 10px 0;\n  ",
              "\n",
            ])),
          function (e) {
            return e.isSubNav ? "display: flex; align-items: center; " : "";
          }
        ),
        ni = Object(l.d)(Ot.a)(
          Vt ||
            (Vt = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n  display: grid;\n  place-items: center;\n  /* height: 100%; */\n  font-weight: 500;\n  cursor: pointer;\n  padding: 10px 0;\n  ",
              "\n",
            ])),
          function (e) {
            return e.isSubNav ? "display: flex; align-items: center; " : "";
          }
        ),
        ti = l.d.div(
          Wt ||
            (Wt = Object(ce.a)([
              "\n  height: 14px;\n  width: 22.86px;\n  margin-right: 6.5px;\n  svg {\n    height: 100%;\n    margin: 0 auto;\n    width: auto;\n    display: block;\n  }\n",
            ]))
        ),
        ii = Object(l.d)(Un)(
          Ht || (Ht = Object(ce.a)(["\n  width: 210px;\n"]))
        );
      var ai = function () {
        return Object(Be.jsx)("svg", {
          viewBox: "0 0 71 55",
          xmlns: "http://www.w3.org/2000/svg",
          width: "36px",
          children: Object(Be.jsx)("path", {
            d: "M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z",
          }),
        });
      };
      var ri,
        oi = function () {
          return Object(Be.jsx)("svg", {
            viewBox: "0 0 50 50",
            xmlns: "http://www.w3.org/2000/svg",
            width: "32px",
            children: Object(Be.jsx)("path", {
              d: "M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445 c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758 c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125 c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077 C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z",
            }),
          });
        };
      var si,
        ci,
        di = l.d.a(
          ri ||
            (ri = Object(ce.a)([
              "\n  & > svg {\n    fill: ",
              ";\n  }\n\n  & > svg:hover {\n    fill: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.darkGray;
          },
          function (e) {
            return e.theme.colors.brandPrimary;
          }
        ),
        li = function () {
          var e = Object(ve.a)("(min-width: 501px)");
          return Object(Be.jsx)(jn, {
            padding: e ? [6, 0] : [5, 0],
            children: Object(Be.jsxs)(mn, {
              justify: "end",
              align: "center",
              gap: 5,
              children: [
                Object(Be.jsx)(di, {
                  href: "https://t.me/cortexdao",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: Object(Be.jsx)(oi, {}),
                }),
                Object(Be.jsx)(di, {
                  href: "https://twitter.com/CortexDAO",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: Object(Be.jsx)(Rt, {}),
                }),
              ],
            }),
          });
        };
      var ui,
        pi = l.d.div(
          si ||
            (si = Object(ce.a)([
              "\n  background: #f4f4f4;\n  mix-blend-mode: multiply;\n  // background-image: url(",
              ");\n  background-size: 65%;\n  background-repeat: no-repeat;\n  background-position: 100% 10px;\n\n  @media (min-width: 501px) {\n    background-size: 475px;\n  }\n\n  @media (min-width: 769px) {\n    background-size: 70%;\n  }\n\n  @media (min-width: 1001px) {\n    background-size: 60%;\n    background-position: 100% 60px;\n  }\n\n  @media (min-width: 1231px) {\n    background-size: auto;\n    background-position: 100% 60px;\n  }\n\n  // Height media queries\n\n  @media (max-width: 500px) and (min-height: 668px) {\n    background-size: 75%;\n  }\n\n  @media (max-width: 500px) and (min-height: 741px) {\n    background-size: 95%;\n  }\n",
            ])),
          we
        ),
        bi = Object(l.d)(hn)(
          ci ||
            (ci = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n\n  /* background-image: url('/green-rings.png');\n  background-repeat: no-repeat;\n  background-size: auto 61.33%; // 92%\n  background-position: top 50% right min(155%, -195px);\n\n  @media (min-width: 500px) {\n    background-position: top 50% right min(155%, -220px);\n  }\n\n  @media (min-width: 769px) {\n    background-position: top 50% right -85%;\n  }\n\n  @media (min-width: 831px) {\n    background-position: top 50% right -50%;\n  }\n\n  @media (min-width: 969px) {\n    background-position: top 50% right -18%;\n  }\n\n  @media (min-width: 1001px) {\n    background-position: top 50% right 0%;\n  }\n\n  @media (min-width: 1201px) {\n    background-position: top 50% right 10%;\n  }\n\n  @media (min-width: 1321px) {\n    background-position: top 50% right 18%;\n  } */\n",
            ]))
        ),
        mi = function (e) {
          var n = e.children,
            t = Object(u.f)(),
            i = Object(ve.a)("(min-width: 501px)"),
            a = function (e) {
              var n = e.children;
              return Object(Be.jsx)(pi, {
                children: Object(Be.jsx)(bi, {
                  children: Object(Be.jsx)(fn, {
                    top: Object(Be.jsx)(Zt, {}),
                    alignChild: "stretch",
                    minHeight: "100vh",
                    children: n,
                  }),
                }),
              });
            },
            r = function (e) {
              var n = e.children;
              return Object(Be.jsx)(jn, {
                padding: i ? [0, 6] : [0, 5],
                children: Object(Be.jsx)(hn, {
                  maxWidth: "1600px",
                  children: Object(Be.jsx)(fn, {
                    gap: 6,
                    top: Object(Be.jsx)(ct, {}),
                    bottom: Object(Be.jsx)(li, {}),
                    alignChild: "start",
                    children: n,
                  }),
                }),
              });
            };
          return "/" === t.pathname
            ? Object(Be.jsx)(a, { children: n })
            : Object(Be.jsx)(r, { children: n });
        },
        ji = ["src", "alt", "size", "isDisabled"];
      function hi(e) {
        var n = e.src,
          t = e.alt,
          i = e.size,
          a = e.isDisabled,
          r = Object(Hn.a)(e, ji);
        return Object(Be.jsx)(
          Li,
          Object(ke.a)(
            Object(ke.a)({ size: i, isDisabled: a }, r),
            {},
            { children: Object(Be.jsx)("img", { src: n, alt: t }) }
          )
        );
      }
      var fi,
        xi,
        yi,
        gi,
        Oi,
        vi,
        wi,
        ki,
        Ai,
        Ci,
        Ti,
        Mi,
        Ei,
        Ri,
        Di,
        Li = l.d.div(
          ui || (ui = Object(ce.a)(["\n  ", "\n\n  ", "\n"])),
          function (e) {
            var n = e.size;
            return (
              n &&
              "\n      width: "
                .concat(n, "px;\n      height: ")
                .concat(n, "px;\n    ")
            );
          },
          function (e) {
            return e.isDisabled && "\n      opacity: 0.3;\n    ";
          }
        ),
        Fi = t.p + "static/media/cxd.f6081117.svg",
        zi = t.p + "static/media/idx-cvx.01a6438e.svg",
        Si = t(35),
        Bi = t(63),
        Pi = {
          white: "#fff",
          dark: "linear-gradient(107.6deg, #1A202E 12.63%, #374055 62.04%)",
          green: "#E8F6F1",
        },
        Ii = l.d.div(
          fi ||
            (fi = Object(ce.a)([
              "\n  background: ",
              " ;\n  box-shadow: 0px 61px 66px rgba(43, 31, 79, 0.07);\n  color: ",
              " ;\n  border-radius: 9.9px;\n  padding: 17px;\n  ",
              "\n  @media ",
              " {\n    padding:  ",
              "  ;\n    border-radius: 18px;\n  }\n  @media ",
              " {\n    padding:  ",
              "  ;\n    border-radius: 18px;\n  }\n\n",
            ])),
          function (e) {
            var n = e.color;
            return (null === Pi || void 0 === Pi ? void 0 : Pi[n]) || "#FFFFFF";
          },
          function (e) {
            var n = e.color,
              t = e.theme;
            return "dark" === n ? t.colors.white : t.colors.darkPrimary;
          },
          function (e) {
            return "green" === e.color && " mix-blend-mode: multiply;";
          },
          se.breakpoints.normal,
          function (e) {
            return "lg" === e.size ? "50px 45px" : "1.4rem";
          },
          se.breakpoints.widescreen,
          function (e) {
            return "lg" === e.size ? "50px 75px" : "2rem";
          }
        ),
        Vi = t(161),
        Wi = t.n(Vi),
        Hi = l.d.section(
          xi ||
            (xi = Object(ce.a)([
              "\n  padding-top: 54px;\n  position: relative;\n\n  @media ",
              " {\n    padding-bottom: 8em;\n    margin: 0 auto;\n  }\n  @media ",
              " {\n    padding-bottom: 10em;\n\n  }\n",
            ])),
          function (e) {
            return e.theme.breakpoints.normal;
          },
          function (e) {
            return e.theme.breakpoints.widescreen;
          }
        ),
        Ni = l.d.div(
          yi ||
            (yi = Object(ce.a)([
              "\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n  @media ",
              " {\n    padding: 0 2rem;\n  }\n",
            ])),
          function (e) {
            return e.theme.breakpoints.normal;
          }
        ),
        Ui = function (e) {
          var n = e.children,
            t = e.speed,
            a = void 0 === t ? 0.03 : t,
            r = e.style,
            o = void 0 === r ? {} : r,
            s = Object(i.useState)(),
            c = Object(W.a)(s, 2),
            d = c[0],
            l = c[1],
            u = Object(ve.a)(se.breakpoints.normal),
            p = Object(i.useState)(window.innerHeight || 0),
            b = Object(W.a)(p, 2),
            m = b[0],
            j = b[1],
            h = Object(i.useRef)(),
            f = function (e) {
              return Wi()(e, 100);
            };
          return (
            Object(i.useEffect)(
              function () {
                var e = !0;
                return (
                  e && h && u
                    ? window.addEventListener(
                        "scroll",
                        f(function () {
                          var n, t;
                          e &&
                            (l(
                              null === h ||
                                void 0 === h ||
                                null === (n = h.current) ||
                                void 0 === n ||
                                null === (t = n.getBoundingClientRect()) ||
                                void 0 === t
                                ? void 0
                                : t.top
                            ),
                            j(window.pageYOffset + window.innerHeight));
                        })
                      )
                    : window.removeEventListener(
                        "scroll",
                        f(function () {})
                      ),
                  function () {
                    window.removeEventListener(
                      "scroll",
                      f(function () {})
                    ),
                      (e = !1);
                  }
                );
              },
              [u]
            ),
            Object(Be.jsx)(Si.a.div, {
              ref: h,
              style: Object(ke.a)(
                {
                  y: u
                    ? (function (e, n, t) {
                        return e > n ? (e - n) * t : 0;
                      })(m, d, a)
                    : 0,
                },
                o
              ),
              transition: { duration: 1.2, ease: "easeOut" },
              children: n,
            })
          );
        },
        Xi =
          (l.d.h1(gi || (gi = Object(ce.a)([""]))),
          l.d.h2(
            Oi ||
              (Oi = Object(ce.a)([
                '\n  font-family: "Aeonik Regular";\n  font-style: normal;\n  font-weight: 500;\n  align-items: center;\n  text-align: center;\n  font-size: 28px;\n  line-height: 34px;\n  margin-bottom: 32px;\n  @media ',
                " {\n    font-size: 48px;\n    line-height: 54px;\n    margin: 0 auto 80px;\n  }\n\n  @media ",
                " {\n    font-size: 74px;\n    line-height: 72px;\n  }\n",
              ])),
            se.breakpoints.normal,
            se.breakpoints.widescreen
          )),
        Gi = l.d.h3(
          vi ||
            (vi = Object(ce.a)([
              '\n  font-family: "Aeonik Regular";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 28px;\n  line-height: 34px;\n  @media ',
              " {\n    font-size: 40px;\n    line-height: 48px;\n  }\n  @media ",
              " {\n    font-size: 60px;\n    line-height: 60px;\n  }\n",
            ])),
          se.breakpoints.normal,
          se.breakpoints.widescreen
        ),
        Zi = l.d.h4(
          wi ||
            (wi = Object(ce.a)([
              '\n  font-family: "Aeonik Medium";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 32px;\n  @media ',
              " {\n    font-size: 28px;\n    line-height: 34px;\n  }\n  @media ",
              " {\n    font-size: 32px;\n    line-height: 47px;\n  }\n",
            ])),
          se.breakpoints.normal,
          se.breakpoints.widescreen
        ),
        Yi = l.d.h5(
          ki ||
            (ki = Object(ce.a)([
              '\n  font-family: "Aeonik Regular";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  @media ',
              " {\n    font-size: 18px;\n    line-height: 24px;\n  }\n  @media ",
              " {\n    font-size: 26px;\n    line-height: 31px;\n  }\n",
            ])),
          se.breakpoints.normal,
          se.breakpoints.widescreen
        ),
        qi = l.d.h6(
          Ai ||
            (Ai = Object(ce.a)([
              '\n  font-family: "Aeonik Regular";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11.8527px;\n  line-height: 13px;\n  @media ',
              " {\n    font-size: 22px;\n    line-height: 24px;\n  }\n",
            ])),
          se.breakpoints.normal
        ),
        Ji = l.d.p(
          Ci ||
            (Ci = Object(ce.a)([
              '\n  font-family: "Plus Jakarta Sans";\n  color: ',
              ";\n  font-weight: 500;\n  font-style: normal;\n\n  ",
              "\n",
            ])),
          function (e) {
            return e.color || se.colors.darkGray;
          },
          function (e) {
            return "md" === e.size
              ? "\n      font-size: 16px;\n      line-height: 24px;\n      @media "
                  .concat(
                    se.breakpoints.normal,
                    " {\n        font-size: 20px;\n        line-height: 34px;\n      }\n      @media "
                  )
                  .concat(
                    se.breakpoints.widescreen,
                    " {\n        font-size: 28px;\n        line-height: 41px;\n      }\n      "
                  )
              : "\n      font-size: 8.62016px;\n      line-height: 10px;\n      font-weight: 600;\n      @media ".concat(
                  se.breakpoints.normal,
                  " {\n        font-size: 16px;\n        line-height: 20px;\n      }\n    "
                );
          }
        ),
        Ki = {
          hidden: { opacity: 1, scale: 1 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { delayChildren: 0.2, staggerChildren: 0.2 },
          },
        },
        Qi = { hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } },
        _i = { hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } },
        $i = t.p + "static/media/GreenFade1.fd4b4169.png",
        ea = function () {
          return Object(Be.jsx)("svg", {
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: Object(Be.jsx)("path", {
              d: "M39.6567 0.343323C39.1989 -0.114441 38.457 -0.114441 37.9993 0.343323L33.9667 4.37592L20.7544 2.11884C19.6185 1.92474 18.454 2.29523 17.6389 3.11035L1.9574 18.7918C-0.652466 21.4017 -0.652466 25.6479 1.9574 28.2578L11.7422 38.0426C14.3521 40.6525 18.5983 40.6525 21.2082 38.0426L36.8896 22.3608C37.7045 21.546 38.0753 20.3815 37.8812 19.2453L35.6241 6.03333L39.6567 2.00073C40.1144 1.54297 40.1144 0.800781 39.6567 0.343323ZM35.2322 20.7037L19.5508 36.3855C17.8549 38.0811 15.0955 38.0811 13.4 36.3855L3.61481 26.6003C1.91895 24.9045 1.91895 22.1451 3.61481 20.4492L19.2963 4.76776C19.5746 4.48944 19.9719 4.3631 20.3598 4.42932L31.9357 6.40686L29.4815 8.86108C27.5394 7.66785 24.9576 7.91168 23.2767 9.59259C21.3107 11.5585 21.3107 14.7574 23.2767 16.7233C25.2426 18.6893 28.4415 18.6893 30.4077 16.7233C32.0883 15.0424 32.3322 12.4606 31.1389 10.5185L33.5931 8.06427L35.5707 19.6402C35.6369 20.0281 35.5106 20.4254 35.2322 20.7037ZM26.1795 13.8205C26.6373 14.278 27.3795 14.278 27.8369 13.8205L29.3893 12.2681C29.7186 13.215 29.5056 14.3103 28.7503 15.0656C27.6981 16.1179 25.9863 16.1179 24.9344 15.0656C23.8821 14.0137 23.8821 12.3019 24.9344 11.2497C25.6897 10.4944 26.785 10.2814 27.7319 10.6107L26.1795 12.1631C25.722 12.6205 25.722 13.3627 26.1795 13.8205Z",
              fill: "#18A974",
            }),
          });
        },
        na = function () {
          return Object(Be.jsxs)("svg", {
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              Object(Be.jsx)("path", {
                d: "M34.3975 5.53711C31.3083 5.53711 28.7949 8.05037 28.7949 11.1395C28.7949 14.2287 31.3082 16.7421 34.3975 16.7421C37.4866 16.7421 39.9999 14.2287 39.9999 11.1395C39.9999 8.05037 37.4866 5.53711 34.3975 5.53711ZM34.3975 14.3972C32.6011 14.3972 31.1398 12.9359 31.1398 11.1395C31.1398 9.3433 32.6011 7.88203 34.3975 7.88203C36.1937 7.88203 37.655 9.3433 37.655 11.1395C37.6551 12.9359 36.1937 14.3972 34.3975 14.3972Z",
                fill: "#18A974",
              }),
              Object(Be.jsx)("path", {
                d: "M1.45076 13.0763C1.67971 13.3051 1.97978 13.4196 2.27985 13.4196C2.57991 13.4196 2.87998 13.3051 3.10894 13.0763L6.15621 10.029L9.20348 13.0763C9.43244 13.3051 9.73251 13.4196 10.0326 13.4196C10.3326 13.4196 10.6327 13.3051 10.8617 13.0763C11.3194 12.6185 11.3194 11.876 10.8617 11.4181L7.81426 8.37095L10.8615 5.32368C11.3193 4.8659 11.3193 4.12341 10.8615 3.6655C10.4036 3.20785 9.6614 3.20785 9.20335 3.6655L6.15621 6.71277L3.10894 3.6655C2.65102 3.20785 1.9088 3.20785 1.45076 3.6655C0.992977 4.12328 0.992977 4.86577 1.45076 5.32368L4.49803 8.37095L1.45076 11.4181C0.992977 11.876 0.992977 12.6184 1.45076 13.0763Z",
                fill: "#18A974",
              }),
              Object(Be.jsx)("path", {
                d: "M26.3674 26.9233C25.9095 26.4657 25.1673 26.4657 24.7092 26.9233L21.6621 29.9704L18.6148 26.9233C18.1569 26.4657 17.4147 26.4657 16.9566 26.9233C16.4988 27.3812 16.4988 28.1236 16.9566 28.5815L20.0039 31.6286L16.9566 34.6759C16.4988 35.1337 16.4988 35.8762 16.9566 36.3341C17.1856 36.5629 17.4856 36.6774 17.7857 36.6774C18.0858 36.6774 18.3858 36.5629 18.6148 36.3341L21.6621 33.2868L24.7092 36.334C24.9382 36.5628 25.2382 36.6772 25.5383 36.6772C25.8384 36.6772 26.1384 36.5628 26.3674 36.334C26.8252 35.876 26.8252 35.1337 26.3674 34.6758L23.3203 31.6286L26.3674 28.5815C26.8253 28.1236 26.8253 27.3811 26.3674 26.9233Z",
                fill: "#18A974",
              }),
              Object(Be.jsx)("path", {
                d: "M26.4579 10.4827L21.7297 6.37253C21.2411 5.94761 20.5005 5.99973 20.0757 6.48822C19.6509 6.97684 19.7028 7.71731 20.1914 8.14222L22.6989 10.322C15.2979 11.29 10.9158 15.1576 8.47973 18.4265C6.34599 21.2898 5.34842 24.1102 4.94788 25.5118C2.1662 25.837 0 28.207 0 31.0747C0 34.1639 2.51327 36.6773 5.60242 36.6773C8.69158 36.6773 11.205 34.164 11.205 31.0747C11.205 28.588 9.57589 26.4757 7.32929 25.7459C7.75125 24.4128 8.66519 22.0787 10.4167 19.7522C13.4659 15.7022 17.7017 13.3172 23.0303 12.6389L20.6939 15.3267C20.2691 15.8154 20.3209 16.5558 20.8096 16.9807C21.0315 17.1737 21.3055 17.2683 21.5782 17.2683C21.9059 17.2683 22.2318 17.1317 22.4636 16.8651L26.5737 12.1367C26.9985 11.6479 26.9467 10.9076 26.4579 10.4827ZM8.86007 31.0747C8.86007 32.8711 7.39879 34.3324 5.60242 34.3324C3.8062 34.3324 2.34492 32.8711 2.34492 31.0747C2.34492 29.2785 3.8062 27.8172 5.60242 27.8172C7.39865 27.8172 8.86007 29.2785 8.86007 31.0747Z",
                fill: "#18A974",
              }),
            ],
          });
        },
        ta = function () {
          return Object(Be.jsxs)("svg", {
            width: "41",
            height: "40",
            viewBox: "0 0 41 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              Object(Be.jsxs)("g", {
                clipPath: "url(#clip0_939_11296)",
                children: [
                  Object(Be.jsx)("path", {
                    d: "M6.33333 36.6667H1.75C1.06 36.6667 0.5 36.1067 0.5 35.4167V21.25C0.5 20.56 1.06 20 1.75 20C7.59333 20 10.3133 22.0283 10.425 22.115C10.8283 22.4233 11.0067 22.945 10.8733 23.435L7.54 35.745C7.39333 36.2883 6.89833 36.6667 6.33333 36.6667ZM3 34.1667H5.37667L8.20667 23.715C7.335 23.3033 5.63167 22.69 3 22.5367V34.1667Z",
                    fill: "#18A974",
                  }),
                  Object(Be.jsx)("path", {
                    d: "M22.1666 40C18.4016 40 11.4616 37.1183 6.3016 34.6983C5.6766 34.405 5.40827 33.66 5.7016 33.035C5.99327 32.41 6.73993 32.1383 7.36327 32.4333C14.2299 35.655 19.6266 37.5 22.1666 37.5C25.5466 37.5 33.2199 33.8483 37.2416 31.7417C36.7783 31.4767 36.0883 31.25 35.0833 31.25C33.6166 31.25 31.8083 31.85 30.0599 32.43C29.4916 32.6183 28.9249 32.8067 28.3633 32.9783C27.1266 33.36 25.6666 33.75 24.2483 33.75C20.7366 33.75 16.0999 32.08 15.9049 32.0083C15.2549 31.7717 14.9199 31.055 15.1566 30.4067C15.3933 29.7567 16.1116 29.425 16.7583 29.6583C16.8016 29.675 21.1783 31.25 24.2483 31.25C25.3416 31.25 26.6299 30.8967 27.6299 30.5883C28.1733 30.4217 28.7216 30.24 29.2699 30.0583C31.2066 29.415 33.2083 28.75 35.0799 28.75C39.2116 28.75 40.3599 31.5017 40.4066 31.62C40.6416 32.205 40.4016 32.8733 39.8499 33.1783C39.3499 33.4567 27.4283 40 22.1666 40Z",
                    fill: "#18A974",
                  }),
                  Object(Be.jsx)("path", {
                    d: "M28 33.0666C27.31 33.0666 26.75 32.5066 26.75 31.8166V31.0666C26.75 30.0816 26.0483 29.2216 25.0833 29.0249L9.03163 25.7416C8.35663 25.6032 7.91996 24.9433 8.05829 24.2666C8.19663 23.5899 8.85829 23.1582 9.53329 23.2932L25.585 26.5766C27.7083 27.0099 29.25 28.8999 29.25 31.0683V31.8182C29.25 32.5066 28.69 33.0666 28 33.0666Z",
                    fill: "#18A974",
                  }),
                  Object(Be.jsx)("path", {
                    d: "M30.5 23.3332C30.3333 23.3332 30.1683 23.2999 30.0117 23.2332C29.6233 23.0682 20.5 19.0965 20.5 10.9232V4.22652C20.5 3.69152 20.84 3.21652 21.3483 3.04319L30.0983 0.0665234C30.3583 -0.0234766 30.6417 -0.0234766 30.9017 0.0665234L39.6517 3.04319C40.16 3.21486 40.5 3.68986 40.5 4.22652V10.9232C40.5 19.0965 31.3767 23.0699 30.9883 23.2349C30.8317 23.2999 30.6667 23.3332 30.5 23.3332ZM23 5.12152V10.9232C23 16.5032 28.7583 19.8249 30.4983 20.6999C32.235 19.8199 38 16.4815 38 10.9232V5.12152L30.5 2.56986L23 5.12152Z",
                    fill: "#18A974",
                  }),
                  Object(Be.jsx)("path", {
                    d: "M30.0834 15.8329C29.7534 15.8329 29.4334 15.7012 29.2001 15.4662L25.8667 12.1329C25.3784 11.6446 25.3784 10.8529 25.8667 10.3646C26.3551 9.87624 27.1467 9.87624 27.6351 10.3646L29.9501 12.6796L34.0834 7.16624C34.4934 6.61458 35.2784 6.50124 35.8334 6.91624C36.3851 7.33124 36.4967 8.11458 36.0817 8.66624L31.0817 15.3329C30.8651 15.6229 30.5334 15.8046 30.1701 15.8296C30.1417 15.8329 30.1134 15.8329 30.0834 15.8329Z",
                    fill: "#18A974",
                  }),
                ],
              }),
              Object(Be.jsx)("defs", {
                children: Object(Be.jsx)("clipPath", {
                  id: "clip0_939_11296",
                  children: Object(Be.jsx)("rect", {
                    width: "40",
                    height: "40",
                    fill: "white",
                    transform: "translate(0.5)",
                  }),
                }),
              }),
            ],
          });
        },
        ia = function () {
          return Object(Be.jsx)("svg", {
            width: "41",
            height: "40",
            viewBox: "0 0 41 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: Object(Be.jsx)("path", {
              d: "M34.6376 8.05115C31.1381 4.59167 26.5712 2.57233 21.6719 2.29401V1.17188C21.6719 0.524597 21.1473 0 20.5 0C19.8527 0 19.3281 0.524597 19.3281 1.17188V2.29401C14.4291 2.57233 9.86218 4.59167 6.36243 8.05115C2.58191 11.788 0.5 16.7581 0.5 22.045C0.5 23.6023 1.10944 25.0757 2.21631 26.1945C3.33081 27.3212 4.80756 27.9416 6.37463 27.9416C8.29633 27.9416 10.0053 27.023 11.078 25.6058C12.1504 27.023 13.8591 27.9416 15.7802 27.9416C17.1119 27.9416 18.3415 27.5003 19.3281 26.7575V33.9874C19.3281 36.0104 17.657 37.6562 15.6028 37.6562H12.6585C12.0112 37.6562 11.4866 38.1808 11.4866 38.8281C11.4866 39.4754 12.0112 40 12.6585 40H15.6028C18.9494 40 21.6719 37.3029 21.6719 33.9874V26.8329C22.6744 27.5519 23.8981 27.9416 25.1863 27.9416C27.108 27.9416 28.817 27.023 29.8896 25.6055C30.962 27.023 32.671 27.9416 34.5924 27.9416C36.1592 27.9416 37.6405 27.3224 38.7635 26.1984C39.8832 25.0772 40.5 23.6023 40.5 22.045C40.5 16.7581 38.4181 11.7883 34.6376 8.05115ZM34.5924 25.5978C32.6457 25.5978 31.0618 24.0381 31.0618 22.121C31.0618 21.4737 30.5369 20.9491 29.89 20.9491C29.2427 20.9491 28.7181 21.4737 28.7181 22.121C28.7181 24.0381 27.1336 25.5978 25.1863 25.5978C22.8682 25.5978 21.6554 23.8489 21.6554 22.121C21.6554 21.4737 21.1308 20.9491 20.4835 20.9491C19.8365 20.9491 19.3116 21.4737 19.3116 22.121C19.3116 24.0381 17.7275 25.5978 15.7802 25.5978C13.8337 25.5978 12.2499 24.0381 12.2499 22.121C12.2499 21.4737 11.7253 20.9491 11.078 20.9491C10.431 20.9491 9.90613 21.4737 9.90613 22.121C9.90613 24.0381 8.32196 25.5978 6.37463 25.5978C5.43866 25.5978 4.55334 25.2243 3.88257 24.5459C3.21271 23.869 2.84375 22.981 2.84375 22.045C2.84375 17.3892 4.67847 13.0112 8.01007 9.71802C11.3459 6.42059 15.7817 4.60449 20.5 4.60449C25.2186 4.60449 29.6544 6.42059 32.9896 9.71771C36.3215 13.0115 38.1562 17.3892 38.1562 22.045C38.1562 23.9709 36.5242 25.5978 34.5924 25.5978Z",
              fill: "#18A974",
            }),
          });
        },
        aa = function () {
          return Object(Be.jsxs)("svg", {
            width: "41",
            height: "40",
            viewBox: "0 0 41 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              Object(Be.jsx)("path", {
                d: "M29.6673 39.9987C23.694 39.9987 18.834 35.1387 18.834 29.1654C18.834 23.192 23.694 18.332 29.6673 18.332C35.6407 18.332 40.5007 23.192 40.5007 29.1654C40.5007 35.1387 35.6407 39.9987 29.6673 39.9987ZM29.6673 20.832C25.0723 20.832 21.334 24.5704 21.334 29.1654C21.334 33.7604 25.0723 37.4987 29.6673 37.4987C34.2623 37.4987 38.0007 33.7604 38.0007 29.1654C38.0007 24.5704 34.2623 20.832 29.6673 20.832Z",
                fill: "#18A974",
              }),
              Object(Be.jsx)("path", {
                d: "M28.0009 33.3316C27.6709 33.3316 27.3509 33.1999 27.1176 32.9649L23.7842 29.6316C23.2959 29.1432 23.2959 28.3516 23.7842 27.8632C24.2726 27.3749 25.0642 27.3749 25.5526 27.8632L27.9426 30.2516L32.8959 24.5916C33.3526 24.0699 34.1409 24.0199 34.6609 24.4732C35.1809 24.9282 35.2326 25.7182 34.7776 26.2366L28.9442 32.9032C28.7142 33.1649 28.3876 33.3199 28.0426 33.3316C28.0292 33.3316 28.0142 33.3316 28.0009 33.3316Z",
                fill: "#18A974",
              }),
              Object(Be.jsx)("path", {
                d: "M14.6667 34.9988C14.5867 34.9988 14.5067 34.9921 14.4283 34.9754C14.2883 34.9488 0.5 32.1004 0.5 16.5488V6.24875C0.5 5.73208 0.816667 5.27042 1.29833 5.08375L14.215 0.08375C14.505 -0.0279167 14.8267 -0.0279167 15.1167 0.08375L28.0333 5.08375C28.5167 5.27042 28.8333 5.73208 28.8333 6.24875V13.7488C28.8333 14.4388 28.2733 14.9988 27.5833 14.9988C26.8933 14.9988 26.3333 14.4388 26.3333 13.7488V7.10542L14.6667 2.59042L3 7.10542V16.5488C3 29.2054 13.0167 32.0821 14.6867 32.4738H14.69C15.3667 32.3304 16.025 32.7771 16.16 33.4554C16.295 34.1321 15.855 34.7904 15.1783 34.9254L14.8683 34.9821C14.8017 34.9938 14.735 34.9988 14.6667 34.9988Z",
                fill: "#18A974",
              }),
            ],
          });
        },
        ra = [
          {
            icon: Object(Be.jsx)(ea, {}),
            label: "Hands-off. No ongoing costs or maintenance.",
            id: "price",
            widthMb: "85%",
            widthTb: "85%",
          },
          {
            icon: Object(Be.jsx)(na, {}),
            label: "Data-driven risk/reward assessments.",
            width: "80%",
            widthMb: "70%",
            id: "strategy",
            widthTb: "60%",
          },
          {
            icon: Object(Be.jsx)(aa, {}),
            label:
              "Secure and stable returns are prioritized over risky degen yields.",
            id: "verify",
            width: "90%",
            widthMb: "75%",
            widthTb: "75%",
          },
          {
            icon: Object(Be.jsx)(ia, {}),
            label: "Low correlation to BTC, ETH, DeFi blue chips & S&P 500. ",
            width: "100%",
            widthTb: "65%",
            widthMb: "75%",
            id: "umbrella",
          },
          {
            icon: Object(Be.jsx)(ta, {}),
            label: "Secure and audited smart contracts.",
            id: "safe",
            width: "44%",
            widthMb: "52%",
            widthTb: "40%",
          },
        ],
        oa = Object(l.d)(Si.a.div)(
          Ti ||
            (Ti = Object(ce.a)([
              "\n  margin: 0 auto;\n  @media ",
              " {\n    display: grid;\n    grid-template-columns: 15.97% 28.4% 20.11% 35.5%;\n    max-width: 845px;\n    width: 100%;\n\n    grid-template-rows: auto;\n    grid-gap: 20px;\n    grid-auto-rows: auto;\n    justify-content: center;\n    grid-template-areas:\n      '. price strategy strategy'\n      'verify verify verify  umbrella'\n      'safe safe safe .';\n    #price {\n      display: flex;\n      justify-content: flex-end;\n      align-items: end;\n    }\n    #strategy {\n      display: flex;\n      justify-content: flex-start;\n      align-items: end;\n    }\n    #safe {\n      display: flex;\n      justify-content: flex-end;\n      align-items: end;\n      margin-top: -65px;\n      position: relative;\n      z-index: 1;\n      @media ",
              " {\n        margin-top: -80px;\n      }\n    }\n    #verify {\n      display: flex;\n      justify-content: flex-end;\n      align-items: start;\n    }\n  }\n  @media ",
              " {\n    width: 80%;\n  }\n",
            ])),
          se.breakpoints.normal,
          se.breakpoints.widescreen,
          se.breakpoints.widescreen
        ),
        sa = Object(l.d)(Xi)(
          Mi ||
            (Mi = Object(ce.a)([
              "\n  color: ",
              ";\n  width: 100%;\n  @media ",
              " {\n    width: 80%;\n  }\n",
            ])),
          se.colors.darkPrimary,
          se.breakpoints.widescreen
        ),
        ca = l.d.img(
          Ei ||
            (Ei = Object(ce.a)([
              "\n  position: absolute;\n  left: 0;\n  z-index: -1;\n  top: -50%;\n  width: 50%;\n  @media ",
              " {\n    width: auto;\n    top: -42em;\n  }\n",
            ])),
          se.breakpoints.normal
        ),
        da = Object(l.d)(Ii)(
          Ri ||
            (Ri = Object(ce.a)([
              "\n  margin-bottom: 8px;\n  display: grid;\n  grid-template-columns: 30px 1fr;\n  grid-gap: 16px;\n  @media ",
              " {\n    display: block;\n    margin: 0;\n  }\n",
            ])),
          se.breakpoints.normal
        ),
        la = l.d.div(
          Di ||
            (Di = Object(ce.a)([
              "\n  svg {\n    height: 30px;\n    @media ",
              " {\n      height: 40px;\n      width: auto;\n    }\n  }\n",
            ])),
          se.breakpoints.normal
        ),
        ua = function () {
          var e = Object(ve.a)(se.breakpoints.normal),
            n = Object(ve.a)("(min-width: 935px)"),
            t = Object(ve.a)(se.breakpoints.widescreen),
            a = Object(Si.b)(),
            r = Object(Bi.a)(),
            o = Object(W.a)(r, 2),
            s = o[0],
            c = o[1];
          return (
            Object(i.useEffect)(
              function () {
                c && a.start("visible");
              },
              [a, c]
            ),
            Object(Be.jsxs)(Hi, {
              id: "protocol",
              children: [
                Object(Be.jsx)(ca, { src: $i, alt: "Green Fade" }),
                Object(Be.jsxs)(Ni, {
                  children: [
                    Object(Be.jsx)(sa, {
                      children:
                        "Gain exposure to the highest quality Curve and Convex pools.",
                    }),
                    Object(Be.jsx)(oa, {
                      variants: Ki,
                      initial: "hidden",
                      animate: a,
                      ref: s,
                      children: ra.map(function (i) {
                        return Object(Be.jsx)(
                          Si.a.div,
                          {
                            style: { gridArea: i.id },
                            id: i.id,
                            variants: _i,
                            children: Object(Be.jsxs)(da, {
                              style: {
                                width: t
                                  ? i.width || "100%"
                                  : n
                                  ? i.widthTb || "100%"
                                  : (e && i.widthMb) || "100%",
                              },
                              children: [
                                Object(Be.jsx)(la, { children: i.icon }),
                                Object(Be.jsx)(Ji, {
                                  size: "md",
                                  color: se.colors.font,
                                  children: i.label,
                                }),
                              ],
                            }),
                          },
                          i.id
                        );
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        pa = t.p + "static/media/GreenFade2.2bcb7666.png",
        ba = t.p + "static/media/Chart.0e65850f.png",
        ma =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO4SURBVHgBtVZdaBNZFP7uzKStZtJm0iRouq6B3VW74LJ/ugsixVdBH5SqDyr4oigUEf8RlYIgiiJKqQ8+lIIIooL4//NQRUUF9aHYals1TW1ibbQmpa3JZDLXe2faarBOrlY/SGbO3HPPN+fcM+ccQiltAhBGAUSjzuulpYCmQQRnlWHCsJNWJAJs3WQ6qaCykqB2D4EAyiR8J+RyVFiXsPAyP8b2tKWF4tRJihxzcuIEo4Algkxa5hfsrnX0pUFxWk30Aq0tgKpSzPrP2ZNUytYlAhEek7S5maK7C0imTMyozMFX+gbzfj/jaCjRPxlDgwut+2tXXTCywKzZBIGgIOn9u8D1axS//mZiys8UfnUA00O34ASv+xc8Di2w7k8cNzE0ZBMGgsSZ9CXzLp0BJNlEqILCYMcYixHQ8sL5ls4QS5fDV07h1SgLuYyODiazT6nc/wXSI4dNRDuBf/7NYfoMio52CZ0RBfrkwqSZNEH7U9vc7P8NuN0UVy5TdEVlVC8hqF5K8kmzWVvgijxp/KXd8HgMxIp9/L2hG0XojE+1dCoCcbhc2VED/YMe9KV86Hk7afSZ5o6z/TqSZSr61CAURWIcBLLMosjen9y/Z0YO7Kdhrlw1L2s9XFW1BsWuITReWIlLd+bneVS3pQYBLTEqX7o9H40XV47K7DBwcMNGVATjaIvPRVPraiQSBK2PFfgDFHX1coOk6x8NUueiMy6YzHZ2mEsR2RBiIV2/7DCMnILaY7vy1/xx7KvZimhPGPWn1oqYEyMtUnSEQ1FkDRcS7wJ5awFvr7XGz10UQqQjkCQTVX/fzCf95Hx/CKks5bCu+ijGi+/WZb6dVKgdjh+KqrKioA5z/iDSIpZjE92sPms2gfLnXwQNjbawbbML3d0UWkkNVLeJF71T8bWgLFy32lbBE9PR2hZE8xMFixYTbNv+Mah5icSbNS9XkZ6Z8HopBtLfduSxvkq4MxS9SQm6TthUkR/CPNIdO7kSxflzCh4+4HXYxMw/DEzSCpcqXre5LsfLLtmq58tXSKw98jUHUq+X/xOYOeBNwpZ5vfSqhUkVhTWKgGntf/4MVj91uYBgoX46Aqvjs8IzMCihvY3ivUezircT+vp9eBW3j6N6qWTV2Z+mjJ2ZjoPZjSaK+jo6PCM5D2apFMGjB4r1BZw8PY7BzFcOzJnDGjRLhtc9zt9TyQRi6YrA0dMRiAzb06YBe/YKZXuDkFaxQAPhU4EouKeH2LWskGIy+fneT4WSEvsngBsfAJhVTNGq/1f7AAAAAElFTkSuQmCC",
        ja = t.p + "static/media/three-crv.5ffb8695.svg",
        ha =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAAqAaJlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA0CSURBVHgBnVkJWFPXEp57k5AEArIXd4lYBOsOahERreLu07oV27rUBevS+r3a6lNrtfq0r7VWq6VqtS5V69LSqrgv4IYLKhZ3ZFEsKMgqhOy5b+ZoYhKSiP2/L1++3HvuuXPOmfnnnwkH/xCCIHC61PWhOpMQy/N8hAAQygEoBQ48OTYABI6DchyXzQF3w8TBFY4XjnvEJDyCfwjuFcfD05R1/m4cP9oIwmi0OFKlNfA5heVw92EpFJRWQWhjX+gXGQJbjmZCjVYPDf29ILSRLzSr7w0ysagGV3CGMwmb5VD4J9djoeZV3l1nYyvTNvjyWmEGzwkzq9U678PpuZBy7T6kZz0Gnd5gGTc8piXMfzcaxn2zH65lF1mueytk0LFFEAzo0gKiWzUCqVicK3Cm5XnFhRvfGLlIVxcbxHUZVJO6fijohGXlKnXorpRbsOf0HSh5WgOvgopqDZzIuM8+zRv4wJherZVxkcGJwYGN3qtK+THBs8eHN142B+/qpiAs5FUp61aj3+06lJ4TOnrpXvgx+apLQ3095ew7wMvd6Rhymy+2nobxXydDZm5RFAf8WdyQGYLg+qRFzm4ID3fLVVfF+7R6Y/zibWdFifuvQlWN1ulEPM/B1MERkDCgPXAYWdGtG0NppRru/l3m9JmSp2pIvngPPKQSWXizwL6Gh4Nl/23WMWVRaqpQZ2OFsxs9a0rVeypU2n6z1p3g6OhcoZ6HFP20K8T3aAVX7j2GBZtPQ/uQIBgaHQqecje4dLcQTCaH72fX024VQGmVmkNfjjYEeymWbt5/1NHYWtsuXF4nUVdzWypV2vhJ3x3AKC9zaWiTwHrwTUJPaNHQF7YdvwGr/0wHvcEE7lIJLBobA707BsNfucUwa+1xeFLp2s8HdG4Bi8fHIGFw8xSxk5fZ36/ls2oVN1WjN8TP3pDyUkM7tWwAmz4diNTkB4n7rsCK3y4yQwlEW3N/ToXkC/egrTIQtsweDB1CXnM53wF0ie9+u4ROJMzXpP7U26WxqnPrI9HJl63dnwHnb/3tdFI6jtE9W8EPM/qCn5ccsgvKYWfKzVrj9AYjHL+SB0aTCRr4KSDx434wNq41+rTTqeFXnOfQpVx3EwhridOt71l89t7B76UKkWh7Zk5x88Xbz4JJcOxjdLyzRnaByRhI1Ro9/Hz4L/hq13l4qnoWfCIMNDexGAxGEzPqQXElZNwrAiUmhQZ+ntAlrBH41pMz3zafgjXovTfuF6P7KH085VLy34PWm8SgTln/rsZk2pbw7QHIyClyaCjR0vIpb+FxBsGlO4Ww6JczUFBSZbmvrO8D/5vUAzxkEki9lg9f7z5vuScR8zDozddh5tudwMvdDW4/KIFP1p2AwtIqh++iYJ3zTpRWV2Nq5d0/IYeuMTcgPjVx3KxTmJGcGRre1B+2fDaIGZp09g5MXXXIxlBCq2b+LNBoB9/q0IxRmBm0i0ln7sDE5cnwqKwawnC+zZ8NhJjWTRy+b29aFtwvqpBKPGC++RoztupEUGeTYGq7M+W2wwf7dw5h/tk40At+w+y1ZNs5MNhREd2LwHRqhrtMDOFN/GrNlVVQBlNXHgJkGwj09oAVU3tDPPq/vR9TgO6iODDBiIoziT4WYzle9H7WwzIuM892V8n/ZgyJgMXjYsDHUwZ3UKx8s+eCjT+LeB4+GhoJSV8Mh391DbVcR3+D7XOHwMppcUwXWCOvqBJm/3QSF2wCMb5j9qg3YdnEnsx9rHEwPQc0eqO7xCAaxowlF0Dp1jvl2gMbh6eFfjulF0zo144ZRAHzLRqq1RlsJhwVGwYf9G3LfJKAqdlmMbFtmiB3drdxCQL5/JFLOZbffSOUsPGTgShwXuSpimotBtsTzMZcH2asNjVAiXoz+OKdApvJxPhQ11aNLb/Tsx5B+l1bKSrBMWSoGckXsmHYot9hyII9TCKaEY3zNHutns2ztKCtx67bbBAxhtTNVltRoAomrquQslDMG3hxJ61eL7r/uMLWWBEuwYqFD17MBnv4I8f61XshWLYey4TcRxWQX/wUVv2RDvsxIeiQa6s1OpBKamd2Gptd4Drx3MgrxlMRAtXQMAj3hlOWPtVAhcpWpIjx6M0HZ8RgynIgSMgQoCN/fsQDMBBV6ttQiNFOOf/LX87CuuQMUGOwlKJosYceXesCnigxgzPkl1TSKfBik0kpRkP8yqvV1u9kEIl4y+8aJP8iNMAe5VUauHm/BN4IDmC/x8a1gXd7vQGPSqshF2XgBfTLNMyEZQ4MNaOwtBpcoRL9Vqc3ks814NEgd43OWIs6JCK68OyiCo9RQw/Ygfxu2c40PJUX1QmdSOMAL+jetimL8t8XDIOp/+pYK8DMUGsN4ApYyoEGgxoN9UKvFBzOIhKJLG5AWtUZbt5/AsMX/g7rD2TAQ/RV0gHWEOMJTezXHuJQfTkCX5fC6jm5iFGcq+VuIvbb+jniP/NukB6QS8VshfaQSsSMwH/Ye4X5p4+nlGWxWNzZwZhe6Tmapl+n5nDkcm6t5xWod12BLJDhHEiJKgqwUm+FHOytJQrhni9KjsY29PdkPmqNblgNLB7XHV2Gh01IVRsOXoMSrA5KKgtQtRUw3505rBMbW9/Xs1ZcEKj6dQUPmRu4IZOIJKJCIqc8b1T6HjKx3Y6JzLvPMlmn0Aa1JvJH2qLs5IG7M6FvO6iPMtCyI2gV7bAZpRjE9oaSC7RBresK5P8UWIJRky02CMYMd7lECGnkx2VaiRh7XqQMs+PkTRtXOJOZzwKEjpo+a1GvHsEUWYPXiCF6tGvKxtGiTzkojUKwym3pQD9Yo23zIDrxcnlRQCGv8OTvcgLk26t4Yghrw1pgNTAQedQaVPB99WvaM75FNMUsNXlgB3b0vToEszRNOHv9ISSdy7J5ljZ5TFxb5kJmENcbjFasg6t8M7whfZ/jRo408lxEgt4oCMd6oaQTWYXm7fwSmL7miKVuoiP8+O1IqO+jsHnp3vNZMAdLICqv7YHNENiI4nz2TydY1WAN8vc+ES8Ygkqoiaila6yozFshxcLzNYEzCqyAfL4s0/awJv5AH2tcRi0Qv+QPVvARPN2lsGp6HCtlrHESj3j4l0mwfM9FyzVKBP3+sxNWY9qtseNSaid9OS6WaQsSPrtP3cYOzj5M05U248iNMMB0cpl8t8VYBcgu4JHdHt4tDOyLGTrqKag/qcaie6/ji378uC9Gt+0O00vLrJofVPKQJrAZg59WTQNgNWpj2jVys1VJ6bB0x7layUGGMTMiNpyCMInrOobtFouiRVv2GuaNGySgz/U//dcDrsyOokgept0sgOJyFURiRRuEhvaJVEJReTXkPa4EsyIsLFWxwKQKgtpMOY9eiCOiwlHdw1jZTr2Ex2UqLM9PMM3qCH0im0N8bLhW4IUJSzclM7lncVIhbbdcras4ff52QcS07w8z8eIIbYIDYckH3Vm/gJCR/ZiV4NfznjgcTxTWFRtxUwa2R4Z4RlMkNT/flAqPcfGO4Id0uHnOYHyH1zb37pPfN1+3hCIXNVJt4kTzuoQ11AzETp8zZKJkm7TiIFzOeqZtqfOyalofCKjnuLfVo10TrBZ6M0PpBJLO3YWZiUedGkpIGNQBGvl7PpLzwjzr6zZ9A4+YCcdwvu9nvxMF7Zo7b0gU4YumrToMm45kMjHjiyVPuBOZR6U3iRtKyQuxGbcYK2IV+rMzDOvWEtumYUaUAf/muiXkOzWWEsWdHZfny93EJ7+e9Bauznkq1CIVrUq6BHORtoiivsIaqheKFeG5AxMNfog7NKTr60wGJqw4xCpWJ+0Ihijk1E9GdEbRzy1XxE7aZX/foeYpT9nk7cbpD6OG7Tx9zVG49xI1H9LQB2hxwUHemOVuYElzHeaOjmJi5tT1fFiCIvxlfa6e7ZvBsgmxJIzWuyuE6cT/dTKWIJzbGlit0+x7qtJ0pp5V2s2/Xb7M20NGTTUk+ybsmCn9/oI11pq9lx12XswgCUlFJ9tRjt/qUaOZzPX/yGFv1aWafJCc6OOvEK9E6nofe1DcRlRV9uWPNejo58RHwYiYMFi2Iw12nbrlanqm5D7FVhSeAKocWO7RffICV+NFrm6u3HFAg83dffpgxZN2IUFt4iKUXlRiEI9qHVQO5I+v+XhADJbfGw9fY1zqCAHe7jC+T1v4/L1oFDL+t3gRjHWPmbwRXoI6/wGiPpOoNBlFs7GwGIP/ysj2oyY4iWUy+bNgFTXO/gChmq4dysHeEc3x3xwlNaDLMaWtcK+QrOGGjq+oiw2v/NdSZcqGEDFn+gDL41FYwSiJL2/mlaDRpYw7SZ8S/azF/x4o49XHvlc4ag7qg1GHHOuPq7i0X41S/ud6URPLXuXdr2ysGdQiDZLJuiD39cRZOmIfpg0PvB9WdJLn8yJXAooDoZATuOtY+F3AVuhxSfTD6xy30PRP3vl/puyYsJ1iucoAAAAASUVORK5CYII=",
        fa =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUDSURBVHgBvVlbSHVFFF4q3i95IQ1JPYogqKE9ZJb3iEzCkATBl3wVlKIwBRUVIfJB0EgUESywBwmFxBCNzB978oKKpITXUhQNUX9/EX8vZ/1r7eMR996zz5lzPMcPPvHsvdbMt2fWzKyZ8YDH4X1iNvEtYibRj/g60Zd4QTwi7hNXic+IfxH/hScEi/nuTgQ6wWfECmIAuBFvEH8gvgDnRGq5TfyS6AEuRg3xBFwjUsst4jvgArxJ/BPcI1LLFngEEsDSVfiEHAQnwiKeuAtPK9TKX4nBIAkTGLSop6fnUwnuAkksiwpobm7G5eVljIyMdImg9PR0XFlZwdLSUtF7M/Ere0KbRQU3NjaiFevr6xgbGysUEBAQgImJiZiamooxMTGGQpOSkvDw8FAp7/b2FisrK0V2L4lvGwk13X2Ryqm6uhq12N7eRpPJpLznluZWn5mZ0dmZzWYcHx/HiooKjIiIUOzj4+MVf61dQ0ODSPCMkdhftMZBQUG4sbGBIvDzzs5OvLy8RBmwwJqaGp1QK3p6eozC4TOt0ESjLuMW3NzcRHdieHjYVnzvasX+ZMNYEWzUIo/F5OQkhoSE2BLLrVvAInkC9iSeEQPBBuLi4mBkZATS0tKE7ykcgCqG+fl5uLm5AT8/P8jKyoL8/HzDMhcWFiAnJwcuLi7ADkaJn/I/H4LkdNPV1SVsnd7eXgwNDRX6JCQk4Nrams6HB1V5eTlK1n1MfI3Ffi/jwKFwdXWlq7SpqcmuLy8mfX19Ol+eQSTF3ofClIxDa2urrrL+/n7ZyjAsLAyp23Wtm5eXJyv2Gxb7XKayubk5VUVnZ2f3c60sCwsLdR/c0dEh698PMoY+Pj66EBgcHHRIKNPDwwNPTk5U5UxNTcn6j/JMYBfR0dHg7e2tera6ugrOgPIB1W9a0UASgVJiReCpyhlQD6l+Uz4BsnBabHCwdMqpgpeXl+r3wcEByEJK7O7uLhwfH6ueZWdng6MIDw+H3Nxc1bOjoyNZdzOLPbVnRWkcUC6resYrU0ZGBsiCBheUlJSontH4UlY9SezxHz54sDsaOWPSgkeyr6+v1Gjm1JB6SDfP8nMJf55nv2axnTKVBQYG6qYdxsDAgDIlgY3pipdcUSJEuYbstMViP2Cxn0g6KDmnCCykqKhIEfaQnA/X19cLP5JbNTMzU1YsZzrKtBEEEgcYnO3bw/7+vhIao6OjODs7i5RN2bTnLZLkKvjjw+DtsmXMm7rr62t0B7a2tuzFLYfAxw/FvmdkTCMez8/PdZVwNzIdgZG9HcFbIMDvWsPk5GRhvDF4k1hWVqZseWyJtn7U2NgYFhcXK11vJJh3x4JW/Vwklhfpy4fGUVFROD09rSu4paVFVWhBQQG2t7cr8bq3t4enp6e4s7ODQ0NDWFdXhykpKaopjIVpP6i2tlbUqv+ADTRrHXh/NDExcV9wW1ub7Ag2JA+qxcXFe6FVVVUiu1uwbGQNwXuyRa2jv7+/sgPt7u5+tFArORlfWlpSwgnEg6oJJGACS1DrCnH1WZfBYsJC+8EB8HHnf64UJkkWyqeIDh97msCghd0o9Gdw4LhTJPgPEJyBuUFoI7gIfPx4Cu4RuUnMAhfDBJY1+iW4RuT/YLlYcesVk4n4LVji2QzyIWK15QuVL+DuhMURPPYOig++3iV+BJYVkO/Kwok+YLkv470Qt+DfYLms+w0kdiZGeAV8+H5eEYbbzwAAAABJRU5ErkJggg==",
        xa = t(162),
        ya = t.n(xa),
        ga = function (e) {
          return ya.a.get(e).then(function (e) {
            return e.data;
          });
        };
      function Oa(e, n) {
        return Object(i.useMemo)(
          function () {
            return (
              n && console.error(n.message),
              {
                data: e,
                isLoading: (void 0 === e || null === e) && !n,
                error: n,
              }
            );
          },
          [e, n]
        );
      }
      function va(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = n.conditions,
          i = void 0 === t ? [] : t,
          a = n.swrOptions,
          r = void 0 === a ? {} : a,
          o = Object(m.b)(
            i.includes(void 0) || i.includes(!1) ? null : e,
            ga,
            r
          ),
          s = o.data,
          c = o.error,
          d = Oa(s, c);
        return { res: d };
      }
      var wa,
        ka,
        Aa,
        Ca,
        Ta,
        Ma,
        Ea,
        Ra,
        Da,
        La,
        Fa,
        za,
        Sa,
        Ba,
        Pa,
        Ia,
        Va,
        Wa,
        Ha,
        Na,
        Ua,
        Xa,
        Ga,
        Za,
        Ya,
        qa,
        Ja,
        Ka,
        Qa,
        _a,
        $a,
        er,
        nr,
        tr,
        ir,
        ar,
        rr,
        or,
        sr,
        cr,
        dr,
        lr,
        ur,
        pr,
        br,
        mr,
        jr,
        hr,
        fr,
        xr,
        yr,
        gr,
        Or,
        vr,
        wr,
        kr,
        Ar,
        Cr,
        Tr,
        Mr,
        Er,
        Rr,
        Dr,
        Lr,
        Fr,
        zr,
        Sr,
        Br,
        Pr,
        Ir,
        Vr,
        Wr,
        Hr,
        Nr,
        Ur,
        Xr,
        Gr,
        Zr,
        Yr,
        qr,
        Jr,
        Kr,
        Qr,
        _r,
        $r,
        eo,
        no,
        to,
        io,
        ao,
        ro,
        oo,
        so,
        co,
        lo,
        uo = t.p + "static/media/frax-usdc-pool.28d4b943.svg",
        po = t.p + "static/media/frax-pool.bc1eaa4b.svg",
        bo = t.p + "static/media/ousd-pool.fafccf33.svg",
        mo = t.p + "static/media/mim-pool.4cc7e5a7.svg",
        jo = t.p + "static/media/susdv2-pool.5affaa71.svg",
        ho = t.p + "static/media/3pool.733fabe8.svg",
        fo = t.p + "static/media/dola-pool.a594329b.svg",
        xo = t.p + "static/media/busdv2-pool.b18c14cf.svg",
        yo = t.p + "static/media/musd-pool.010af6c0.svg",
        go = t.p + "static/media/ironbank-pool.667b439a.svg",
        Oo = [
          "convex-fraxusdc",
          "convex-frax",
          "convex-mim",
          "convex-3pool",
          "convex-dola",
          "convex-busdv2",
          "convex-musd",
          "convex-ironbank",
          "convex-susdv2",
        ],
        vo = [
          { id: "convex-frax", name: "Frax", icon: po },
          { id: "convex-ousd", name: "OUSD", icon: bo },
          { id: "convex-mim", name: "MIM", icon: mo },
          { id: "convex-susdv2", name: "sUSD", icon: jo },
          { id: "convex-fraxusdc", name: "Frax-USDC", icon: uo },
          { id: "convex-3pool", name: "3Pool", icon: ho },
          { id: "convex-dola", name: "DOLA", icon: fo },
          { id: "convex-busdv2", name: "BUSD", icon: xo },
          { id: "convex-musd", name: "mUSD", icon: yo },
          { id: "convex-ironbank", name: "Ironbank", icon: go },
        ],
        wo = function () {
          var e,
            n = va("https://cxd-data-api-xsehdlynwa-ue.a.run.app/platform").res,
            t = Object(ve.a)("(min-width: 501px)"),
            i = Object(ve.a)("(min-width: 769px)"),
            a = 24;
          return Object(Be.jsxs)(Co, {
            children: [
              Object(Be.jsx)(ko, { children: "Convex Index Token" }),
              Object(Be.jsx)(Eo, { children: "idxCVX" }),
              Object(Be.jsx)(Mo, { src: ba, alt: "Chart" }),
              Object(Be.jsxs)(Ao, {
                children: [
                  Object(Be.jsxs)("div", {
                    children: [
                      Object(Be.jsx)(Ro, { children: "Price" }),
                      Object(Be.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(Be.jsx)(Do, { children: "$6.3454" }),
                          Object(Be.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "flex-start",
                              marginLeft: 12,
                              marginTop: 4,
                            },
                            children: [
                              Object(Be.jsx)("img", {
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE1SURBVHgB5ZCxSwJRHMffCwMvKp5DmEHwaBAaAomgoaGC/oGgIQKjtkaHmhvaCqK5qCscyiAimsrhrKAykCMERQc9FBQH8S16B4ee9zu44Y4TzlH8wuPxfr/f5/f7vh9CAy/spkjTNLLzcSUWm3VLPDjuZx43DRRFIUpbpe1Ox3iXWw3jDngnkasGHMdJugufqqr0+P/1mS/8UDM3gvrQUeqJB3jNH5Rmx3zODWRZpuHPa/4x/xcyY7CDyO+DECulQgDzy+F1RwcA7yejQrya3TvLxQVo4gTDlyZGvQaD7XCilqcLZIalWYXoNtk8CUjvlYwFNustk7cTl8Xp2KEWSd6LMHXj7fwW3nAgZwHstu2wmVt8ObnY/boRe8Kgg++oI+xWnpWpuTt9IaunS1ubGGOGhk9dc8GqOF9/4r8AAAAASUVORK5CYII=",
                                alt: "rise icon",
                              }),
                              Object(Be.jsx)(Ro, {
                                style: { margin: 0, marginLeft: 4 },
                                active: !0,
                                children: "2.2%",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(Be.jsxs)("div", {
                    children: [
                      Object(Be.jsx)(Ro, { children: "APR" }),
                      Object(Be.jsx)(Do, { children: tn(n, 14, te) }),
                    ],
                  }),
                  Object(Be.jsxs)("div", {
                    children: [
                      Object(Be.jsx)(Ro, { children: "TVL" }),
                      Object(Be.jsx)(Do, {
                        children: n.isLoading
                          ? Object(Be.jsx)(Se.BeatLoader, {
                              size: 14,
                              color: te,
                            })
                          : "$".concat(
                              He(
                                null === (e = n.data) || void 0 === e
                                  ? void 0
                                  : e.tvl
                              )
                            ),
                      }),
                    ],
                  }),
                  Object(Be.jsxs)("div", {
                    children: [
                      Object(Be.jsx)(Ro, { children: "Allocations" }),
                      Object(Be.jsxs)("div", {
                        style: { display: "flex", alignItems: "center" },
                        children: [
                          Object(Be.jsxs)(zo, {
                            children: [
                              Object(Be.jsx)(Lo, {
                                size: a,
                                src: ja,
                                alt: "three crv icon",
                              }),
                              Object(Be.jsx)(Lo, {
                                size: a,
                                src: ma,
                                alt: "mim icon",
                              }),
                            ],
                          }),
                          Object(Be.jsxs)(zo, {
                            children: [
                              Object(Be.jsx)(Lo, {
                                size: a,
                                src: ja,
                                alt: "three crv icon",
                              }),
                              Object(Be.jsx)(Lo, {
                                size: a,
                                src: ha,
                                alt: "al usd icon",
                              }),
                            ],
                          }),
                          Object(Be.jsxs)(zo, {
                            children: [
                              Object(Be.jsx)(Lo, {
                                size: a,
                                src: ja,
                                alt: "three crv icon",
                              }),
                              Object(Be.jsx)(Lo, {
                                size: a,
                                src: fa,
                                alt: "frax icon",
                              }),
                            ],
                          }),
                          Object(Be.jsx)(To, {
                            children: "+".concat(Oo.length - 3),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              !i &&
                Object(Be.jsx)("a", {
                  href: "https://docs.cortexdao.com/fundamentals/convex-index-101",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: Object(Be.jsx)(Fo, {
                    variant: "contained",
                    size: t ? "large" : "medium",
                    isRound: !0,
                    isFullWidth: !0,
                    children: "Learn more",
                  }),
                }),
            ],
          });
        },
        ko = Object(l.d)(Zi)(
          wa ||
            (wa = Object(ce.a)([
              "\n  @media (min-width: 500px) and (max-width: 768px) {\n    font-size: 28px;\n  }\n",
            ]))
        ),
        Ao = l.d.div(
          ka ||
            (ka = Object(ce.a)([
              "\n  > div {\n    margin-bottom: 24px;\n  }\n  @media ",
              " {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n    gap: 1rem;\n    > div {\n      margin: 0;\n    }\n  }\n",
            ])),
          se.breakpoints.normal
        ),
        Co = Object(l.d)(Ii)(
          Aa ||
            (Aa = Object(ce.a)([
              "\n  @media (max-width: 768px) {\n    transform: translateY(100px);\n    margin-top: -100px;\n  }\n  @media ",
              " {\n    // transform: translateY(0);\n    padding: 2rem;\n    width: 100%;\n  }\n",
            ])),
          se.breakpoints.normal
        ),
        To = l.d.span(
          Ca ||
            (Ca = Object(ce.a)([
              "\n  font-family: 'Aeonik Medium';\n  color: ",
              ";\n  font-size: 14px;\n  line-height: 16px;\n",
            ])),
          se.colors.darkGray
        ),
        Mo = l.d.img(
          Ta || (Ta = Object(ce.a)(["\n  width: 100%;\n  margin: 56px 0;\n"]))
        ),
        Eo = l.d.p(
          Ma ||
            (Ma = Object(ce.a)([
              "\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 20px;\n  color: ",
              ";\n  margin-top: 8px;\n",
            ])),
          se.colors.darkGray
        ),
        Ro = l.d.span(
          Ea ||
            (Ea = Object(ce.a)([
              "\n  font-family: 'Plus Jakarta Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 110%;\n  margin-bottom: 8px;\n  display: block;\n  color: ",
              ";\n  @media (min-width: 500px) and (max-width: 768px) {\n    font-size: 20px;\n  }\n",
            ])),
          function (e) {
            return e.active ? se.colors.brandPrimary : se.colors.darkGray;
          }
        ),
        Do = Object(l.d)(Yi)(
          Ra ||
            (Ra = Object(ce.a)([
              "\n  font-family: 'Aeonik Bold';\n  @media (min-width: 500px) and (max-width: 768px) {\n    font-size: 28px;\n  }\n",
            ]))
        ),
        Lo = Object(l.d)(hi)(
          Da || (Da = Object(ce.a)(["\n  img {\n    width: 100%;\n  }\n"]))
        ),
        Fo = Object(l.d)(Un)(
          La ||
            (La = Object(ce.a)([
              "\n  /* height: 100%; */\n  height: 60px;\n\n  @media (min-width: 1001px) {\n    min-width: 233px;\n    font-size: 1rem;\n    font-weight: 700;\n    line-height: 19px;\n  }\n",
            ]))
        ),
        zo = l.d.div(
          Fa ||
            (Fa = Object(ce.a)([
              "\n  margin-right: 0.5rem;\n  display: flex;\n  flex-direction: row-reverse;\n  ",
              " {\n    &:last-child {\n      margin-right: -4px;\n    }\n  }\n",
            ])),
          Lo
        ),
        So = function () {
          var e = Object(ve.a)("(min-width: 501px)"),
            n = Object(ve.a)("(min-width: 769px)");
          return Object(Be.jsxs)(Hi, {
            children: [
              Object(Be.jsx)(Uo, { src: pa, alt: "Green Fade" }),
              Object(Be.jsx)(Ni, {
                children: Object(Be.jsxs)(Io, {
                  color: "dark",
                  size: "lg",
                  children: [
                    Object(Be.jsxs)(Wo, {
                      children: [
                        Object(Be.jsx)(Po, {
                          size: n ? 80 : 40,
                          src: zi,
                          alt: "cxd-icon",
                        }),
                        Object(Be.jsxs)(No, {
                          children: [
                            Object(Be.jsx)(Ho, { children: "idxCVX" }),
                            " instantly diversifies your portfolio across the entire Convex Index.",
                          ],
                        }),
                        n &&
                          Object(Be.jsx)("a", {
                            href: "https://docs.cortexdao.com/fundamentals/convex-index-101",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: Object(Be.jsx)(Vo, {
                              variant: "contained",
                              size: e ? "large" : "medium",
                              isRound: !0,
                              isFullWidth: !n,
                              children: "Learn more",
                            }),
                          }),
                      ],
                    }),
                    Object(Be.jsx)(Bo, {
                      children: n
                        ? Object(Be.jsx)(Ui, {
                            children: Object(Be.jsx)(wo, {}),
                          })
                        : Object(Be.jsx)(wo, {}),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Bo = l.d.div(za || (za = Object(ce.a)(["\n  position: relative;\n"]))),
        Po = Object(l.d)(hi)(
          Sa || (Sa = Object(ce.a)(["\n  img {\n    width: 100%;\n  }\n"]))
        ),
        Io = Object(l.d)(Ii)(
          Ba ||
            (Ba = Object(ce.a)([
              "\n  width: 100%;\n  margin-bottom: 5rem;\n\n  @media ",
              " {\n    padding: 40px;\n  }\n  @media ",
              " {\n    margin: 0;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n    padding: 50px 75px;\n  }\n  @media ",
              " {\n    gap: 4rem;\n  }\n",
            ])),
          se.breakpoints.tablet,
          se.breakpoints.normal,
          se.breakpoints.widescreen
        ),
        Vo = Object(l.d)(Un)(
          Pa ||
            (Pa = Object(ce.a)([
              "\n  /* height: 100%; */\n  min-height: 60px;\n\n  @media (min-width: 1001px) {\n    min-width: 233px;\n    font-size: 1rem;\n    font-weight: 700;\n    line-height: 19px;\n  }\n",
            ]))
        ),
        Wo = l.d.div(Ia || (Ia = Object(ce.a)(["\n  // width: 50%;\n"]))),
        Ho = l.d.span(
          Va ||
            (Va = Object(ce.a)([
              "\n  background-image: linear-gradient(\n    92.98deg,\n    #f10800 -18.93%,\n    #ffdb00 12.77%,\n    #7dff7a 48.69%,\n    #1cffdb 83.2%,\n    #0020ff 116.31%\n  );\n  background-size: 100%;\n  font-family: 'Aeonik Bold';\n  background-size: 100%;\n  background-repeat: repeat;\n  background-clip: text;\n  text-fill-color: transparent;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n",
            ]))
        ),
        No = Object(l.d)(Gi)(
          Wa ||
            (Wa = Object(ce.a)([
              "\n  color: #fff;\n  margin-bottom: 32px;\n  margin-top: 20px;\n",
            ]))
        ),
        Uo = l.d.img(
          Ha ||
            (Ha = Object(ce.a)([
              "\n  position: absolute;\n  z-index: -1;\n  right: 0;\n  bottom: -10%;\n  @media ",
              " {\n    top: -75em;\n  }\n",
            ])),
          se.breakpoints.normal
        ),
        Xo = t.p + "static/media/cortex-dao-green.6c59c8ee.svg",
        Go = t.p + "static/media/GreenFade3.c440c423.png",
        Zo = t.p + "static/media/ust_wormhole.859510b4.svg",
        Yo = t.p + "static/media/dai.8ceacd94.svg",
        qo = t.p + "static/media/usdc.88592f8c.svg",
        Jo = t.p + "static/media/tether.57035bfc.svg",
        Ko = function () {
          var e = Object(ve.a)(se.breakpoints.normal) ? 42 : 22;
          return Object(Be.jsxs)("div", {
            style: { display: "flex", flexDirection: "column" },
            children: [
              Object(Be.jsx)($o, {
                style: { marginLeft: "50%" },
                children: Object(Be.jsxs)(_o, {
                  children: [
                    Object(Be.jsx)(Qo, {
                      size: e,
                      src: ja,
                      alt: "threecrv icon",
                    }),
                    Object(Be.jsx)(Qo, {
                      size: e,
                      src: Zo,
                      alt: "ust wormhole icon",
                    }),
                  ],
                }),
              }),
              Object(Be.jsxs)("div", {
                style: { display: "flex", justifyContent: "flex-end" },
                children: [
                  Object(Be.jsx)($o, {
                    space: !0,
                    children: Object(Be.jsxs)(_o, {
                      children: [
                        Object(Be.jsx)(Qo, {
                          size: e,
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAAqAaJlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAffSURBVHgBzVkLUFTXGf7O3QfLaxfwEVgFMRMzRI0Ki0iLFqkatRnTPJzYxKpVE5tk8BFfmWZajU6FsbWTahR1OralTSYz5lWFpEkZFRIdIkUelYFEg12WxzIisrvALiy79/S/l4Kssuxd4+ub2d17Hv+53/n/c/7/P2cZvgdiY5PHaFXiIsZV0zj4JKp6hIPpGaABeC8YrjIRbZyxGkB1VuzqPtfkqL2O2wRD8BDi40zzGePbiFAWlVXBCDPGCrjo/Z3FWn0WQUIx2bmYq643OlYwSCSRhNub6A1wVg+B77Y0V/5NqYiiFybEpZg448eo83TcYdCyKYWHrWi8eqE+UN+AJkyIM21AP9GJuAugceOZij8TZTA22B3WupH6jkg2YVxyDs19Dz2G4u7CQCpeZoiMY/bO1mJ/nfySnRCXnEc/r+PeYq5BH6clwqeHaxyWbKIx5S3OsBX3Bxn6SOM1R6f13zc33LLBJsTNWE5+8V3cX9C+Y09ZmisKh1b6kI2LM43WMLEMd2kzBYnWTpeQ1NFxwT5QIQxt1Qj8bTwYRCXERoRxn6U4qNnxsdPTBEE4jwcL3WJXb8JAiFYP1AoqVTY4DyhN4RJTpyUhM3MWRo+JptkOH1c6u7pwNO89dHZ2y2VR9MAQFQFntwter+LgF84idG/BgQ3yu6UvY8zUeLVObaaiMJIkp8ls2rIGr2/OlkkHwqqVr6L41HnEJ8QiZ+8OzJ6dRqRF5OUdw+F38uF09kAButHtibfYL3bImlVptfOIihBIavuvXkP2+pfl5zNnSlBeXkVa8t6YjAikppqg1WrQ3NxKRL+mSQl489ebSKMOLPnJC2DkLA8f2YcuRy+OHv4rFCCMhaufhR3HZLI03nOBJMLDQ7Fy1c/k5725B3D4UL6s6aGYmZYCXUg4Oq7bcfz4CWlkIsthSp2BF55fh/rvLHK/Qwf/jHnzMokslEAyISmTyD4cbTJ4IC4IJPFo0kTo9ZFoa2vHwQN/giBofNonJMYjg8wsucji4nNwOV1yPYcXYaGheOa5J9Hjcst1j02eRNrXQSlIJVIqCrVHh8fpVxtIQGD9wc7tppya+QY+nU6HrB/PloetrKhBg7lxsE0k7dfW1VH7D3xkLv7nWwSBsVKirxbhTRAQeLfU1tahr68P48YZkWyaiqqK2n4yIpl55gxERelhtztoHVf6yDGuxuqVG5FimoaS4jK8tG4Z2q+149PCMwgCTA1xoipKb1xMhYDLwNMn4qHYUZg2fSp++vQiGMeNht6gR0ZGGhYvzkLMqGgyfzEuX77io3mB1LA7ZxsWLJgHd58Tb7yxCbPnpEOjEVB2vhpKIajYFyzBmLyLnncoEdBoVcg7kosnFs7328dsNiN3z37889MS2V5MEFFdU4KFC55H7t438e03V1BddRFrX16BpU+/dMsm9QMuCmylinJIafFmKpEQvRwnPvkc9fVmeD0ehNBatds70dxkRV3dJdq2IhITE7HkqUWw2a+jqrIWKlLtiz9fSsHBhuXLl+Hokb/InkCiWHDiX1AKLvKPaM2yLgGKZidDEFQoPFkEq7UNc+ZYyLG78Pf8D+FyOeEV+/CbnZvxy1dWY+vW9Xj/vRPo7XFj/x+PYsfOraTRGlgsFmRmZWD1qg0IBoypu9gEY+oaci/HghFMIDf1LLkiKTx/8vFnPrtfp9Piq9ICjB07Bmt+kY3TRaVITn2clpBaOiTSJnWhvc2GhoaWIN4orRaWSSOwbyC7MmWHR4MhEllzM2SiZWWVPkQl9JAmL1+ql8mGhYYRPw8OHPwt+Wi93K5Wq+Sot3vnH/DB8QIohcrTc1nt5uIljcK8oj+JmYLoGANsNods1psxZmwMkh57VH6+1i4lSyo8MX/pYC4hULhcv3Et5i+cgw8/KFS4wVirua22VbBaL1yjkT5TIIHUmdORnp5CZuAoKjpFNR6ER2jlT0RkCCZPeRjv5OVg1KgYWBoa8dWXX8s2c3X3wdnllj92ezfstm6yUASUg8upa39uwPE5jfnkSN0fio3Bu+/nydFKwuYtr/jta+uwU8aVDbVKS8vAi38U5EMfGSm3aUO0GD9+PLZv26XYbXGIJwfJ9nh1x7WC622ylNqfhI7Wn5TejQQpwp07W4pdO/fhyndN8i5gtKk+/qgQISHa//fxUKitQ3lZjaI0UyLr4X2SGW9sKrp1KaSRR9SuSs0RERHut93p7JUjnUKNKQPDEbpielV6HHJSEPaJondEsl4Po/XmxD0EF7x870BhMOE2N5UXk1lO4wECE9ghc2uVeaDsczpgXnEt/djwYMAs9vDcoRU+iamtq9VmMBivk7tZgvsLurQUtluuVpQMrbzl+ohu8ir0BmMEubMf4v6ALoSwo6GlYv/NDcPedTkc1iJ9ZGwinaBm4B6DLqt/39BSNWzK6vcW0dHZepLSx2h6nIV7hwOWlqot/hpHvJ+lq8cvDJGxkttMJ0+hxl0CWdBOxt9osVbmjNxPASbGJf9IZMgnV5+IO49yStrXNbRUVwbqGPBiQ8J/rZVfurkwhSLna1Q0406A81bRiw2zWh5JV0JUQtD/uJhMJk1bq/dFMtt6qRiUsPw6flYQ2B46FJU0NZW6gpW+bSTEzprMVW46ULE02sWT6AY4gTQWTbcwGs4FN41uo3oLtdNhDOXkk041Ngb+V8Yf/gdft/e08mVHCQAAAABJRU5ErkJggg==",
                          alt: "susd icon",
                        }),
                        Object(Be.jsx)(Qo, {
                          size: e,
                          src: Jo,
                          alt: "tether icon",
                        }),
                        Object(Be.jsx)(Qo, {
                          size: e,
                          src: qo,
                          alt: "usdc icon",
                        }),
                        Object(Be.jsx)(Qo, {
                          size: e,
                          src: Yo,
                          alt: "dai icon",
                        }),
                      ],
                    }),
                  }),
                  Object(Be.jsx)($o, {
                    children: Object(Be.jsxs)(_o, {
                      children: [
                        Object(Be.jsx)(Qo, {
                          size: e,
                          src: ja,
                          alt: "three crv icon",
                        }),
                        Object(Be.jsx)(Qo, {
                          size: e,
                          src: ha,
                          alt: "alusd icon",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(Be.jsxs)("div", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "5%",
                },
                children: [
                  Object(Be.jsx)($o, {
                    space: !0,
                    children: Object(Be.jsxs)(_o, {
                      children: [
                        Object(Be.jsx)(Qo, {
                          size: e,
                          src: ja,
                          alt: "three crv icon",
                        }),
                        Object(Be.jsx)(Qo, {
                          size: e,
                          src: fa,
                          alt: "cxd-icon",
                        }),
                      ],
                    }),
                  }),
                  Object(Be.jsx)($o, {
                    children: Object(Be.jsxs)(_o, {
                      children: [
                        Object(Be.jsx)(Qo, {
                          size: e,
                          src: ja,
                          alt: "three crv icon",
                        }),
                        Object(Be.jsx)(Qo, {
                          size: e,
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAmiSURBVHgBvVkLUFTXGf7OZZddUFhe4SWPRUERiwpqfASFxkdtq5lJjdFW04lJx5pOa9tpZxKd6dROOtNmOsm0adqJcZrWiWlrjI1GI4oVETUmUcFgJGKJsqLCqoC7LLCve2///+JSVhe4l6T5mAv3nnse3/3Pf/4XAqPFjBlmeyCmVDGZy4WqTIeKyapAFlQlHhBm6uGDEF1Q1csQOE9XvQjisKOhtoXeqRgFBAwir+ThXBnyUzRwtaqq+dQk6R1LY7wQ0gdCYLulJ7C7qelkNwxAN1n79Aq7AnUz3T5BgrEOTEArR0kSLJZoWC0W7Z4aSaAqAsEgfD4//AE/ZFm5d+lWVUi/j/OprzU21nj0cBiRbFFRUbTHkrZBKMomVajpoXar1YKE+HjEjRmD6GgzJGloAcuyjD6fD263B90eD3yBwP8WFuJjun/GUX/sFD4PWXtFRYLiVrdCUR6jrhqbMbGxSE1J0v6yVI1CUVTccblwq6OTJB4IseilubY4JqS+hF27ZBgly9uuCuUA7eZkfjabTchMS0N83Fh8EVAURSPMF6uMBinqteg068bmykpfpDFRGIoo1IM0RSE/j6WttmeNQ2xMDL4o8K6MHRNLahRLqtGjkSfWM5SeYJ6r3bEHESzGfWTTpi5JNUnBKiKrSTQlKRFZmemIiorC/wNmsxk2Wzw8PT0IypoGTLVl5qW52loq7yUcxoAPE0yWbUS0ItRmi4/T9FMPeDsH/+jVabYgtrg4uLs9kEnCZLeJsN3panOcHdwvbLa8kvIfyar6clgHWjA9NYUknISRiBZ/ZTKWlM/rf6brz395k0yXD3rBpq75SguCQU3CHVJUoKzl7KmLofcD9iZnZtl4GeqmSCTab97Grc4ujIT0tFSUzZ6pXQ/NKoXFGg0jMJtMyEofsI7JUKL/gIoK031kEYx6jsSREWkSJuy8eQsdQxDmw2yxWpGbOWg47UhBXi7tsTFdjyNrk5hg0+4VVV2U3S09PDAl/2KpEtkGWnbMSJNlkvSS6dCFEE8Tr12xHAvmzCTncL8kOzo7sa/qGA4cPkrbG4QeBMj+/ueKQ3MmAtIHjoIHytj+ap9tSx+/kcSzRM9E3XRq2VuNjY1B4aR8PP/sj1FEf4eyFmzuppMuF00uwKm6BgRDjmAY8Fysv319XnpSM+Juew+6nS3XJcxYbxaqugoG0E4qwS528082IIHMjh5MmZiPXz+7MaL0IyE5MSFkTaJMUcq3tZvs9LhSkupzMBKB0SSrvrkID82dPdDERr365Id4a897OHj0BBouXISJDkxmeqr2XpKE5qZ5Y89fuDjiEmzOPD29moRpvRTXhnV/MhHDhTAQ5jGSEhLIJheGtdWdb8Qft27XSIVw/NRpLF+6EOtWfwsSfSDr7LKFZdh/8AgFNW4MLw+hufbevj42g/bsfbV5EqnAVBiAqo3MJF20hrW73N3k2sU9fVXsP1SN90/XaS7VRUbf6/XjwdJi6EEM6bsWN6iqRFFfCX/wFBhATIwFE+w5aHfeDGsvnzsL8+fNgZl0ciAwQb96VB6pJUl20we5tWtiXg5UHblCDIWhd0NPQT9TTDQmCwaQaLOR6UqAo7UtrJ3186frvwvPmsfICznQ9FkLrrRcxSW6b7x0maKrDk3XZfJOHKTrOSGst3xRzMC9x5tICvqO810kEFkmzG702LHjKC+fH/aeIyk2VXwx2FbWNTTik4vNSElORDSFmn6/HyYyT7Isj7ieJlm2t6qawjI2wQDiY61IIsnmZo/DDTJhe97dT3roHbI/28xZJcVY9egydHZ6yBN2kCp4wg7isLjbjYRqlejBCwNQaBuTyWslkh0syM9H+60uLF2xFr958WV8dPoMPJ5u7RSq9ygln+4VjyymGOMOulzuCDlZZAyap5ekKkiZVN16y7lUEhFlHeXsoWB8Lm44O/D6zr34G11mSUFuVhaKiyZh6cIFWDC/bCA/YymXTpuCmtqT/cG2DqKhjxJCapfIiLXAAJqam2Eh75WcaCN7a0PJ9GLYx/VHSjytT5Fw6eoN7D54FOt//kvsfHt32Hh7ViYc19p0rcWhotz/UaoqxCVSA3EBBiBTJaPpYpMWGfH1QEoyvrf28YiHm1JtNF92hKkEu1tnx8jhJqPP5x1QWdqbj8kp4AwMVEj4O3e89Q5JN1qLP9m0rFr5KH647juIMUVprpC3nRexZzyAJ1avDMsYbnKCqOjT1x5ytxrI4imBwGl2t/8mYVHcrd8qnP6kCe9VVmHZN76m6RR/6cZnnsbjdOJrT5yAm1Lt3NxczJs3NywlYgm/S+qhJ91hneYIT+MqcNZx/sQdHiVyS8qraaIKGEB8rAVvvvoSCgsLdfXnxf/+j514ZfvbyMxIG7E/E71y9RrvECVz0qar9TUvaEFofKad1eERGIi8fAEZlVXVmJRvJ5ubPaS0WJrsQLa9vgO/fWUb+vwB7dDEjR0+zm8jd+6nvjRvQFH8T7ud17o1sqk56ZdlJZprWIa8mTcQ1DKATxsv9FsHyiA4tQ7B6XTiSHUNNj//AvZVH+cihtbOQTUTZm8X6SN76b2T8j4NAjtaz518g2+10Z3Xr/sSMnL4bCyGwcoiVYPwGcUJ7+w/BCF7MXdOf4yrKDJWrnkSuw7U4FaX+75pmTDlWJRxhBPmnXC0Xqd4QEuBugMSnvS0OTTmA3GsV77zKk1Yh1FCJYPvp4oh6yafdrZWQTp8w53722QZWIKDTZvzdge8/ek7nXuxra2u9tPQu7DPzZlRUabK6gEqWMZhFCjITkfx5InapCy1quMfocc7ct2AaxJcm+CqjOPajX7ykmiQFFHecq7mTkSyjNySip+pqvI7jKLQzBgsJSNVRq78cEVGGy/EbTIBX2+trzkzuM99KamrveVU4jh7Ho2ZNhrCTDB0GQEXne/CT651fWv9sap7+0TMvUyu2O9TIvFXfPnwU53gB0T0n5FeRkz2Ozub5dQxRYdkS5BN2SyMUiWMQXRLQnrKca7mjaF6DFnbYcKu+Q8etnX1tVGYPoea9JUSjYMMhqinrV9JXurwcB11SSynZGERVPlFIr2IToChzGJYCNFLc26Ndvu2NDd/6B6xO/RDspd+dTEZ0V+RWZqJYXZlBPBxp9hP7FUEfnGtrqZZ78BR6OIWKW/akZmyJK2h4cuJfI5mv+/+gyQCN6V/GeGjZKeBIv5/kfvYeaX+/asw+M+7z3dwtmyRMvZWZVsVy2xFUrj+MIHsZDLNSgGCoAqeuK4G1Usmk3rBC6m+7WxNh1GCg/Ffzx0QpM+DDCMAAAAASUVORK5CYII=",
                          alt: "ousd icon",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              Object(Be.jsx)("div", {
                style: { display: "flex", justifyContent: "center" },
                children: Object(Be.jsx)($o, {
                  children: Object(Be.jsxs)(_o, {
                    children: [
                      Object(Be.jsx)(Qo, {
                        size: e,
                        src: ja,
                        alt: "three crv icon",
                      }),
                      Object(Be.jsx)(Qo, { size: e, src: ma, alt: "mim icon" }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        Qo = Object(l.d)(hi)(
          Na ||
            (Na = Object(ce.a)([
              "\n  img {\n    width: 100%;\n  }\n  margin-right: 0.8rem;\n\n",
            ]))
        ),
        _o = Object(l.d)(Ii)(
          Ua ||
            (Ua = Object(ce.a)([
              "\n  display: flex;\n  flex-direction: row-reverse;\n  margin-bottom: 10px;\n  > div {\n    margin-right: -4px;\n    &:first-child{\n      margin-right: 4px;\n    }\n  }\n  @media ",
              "{\n    margin-bottom: 20px;\n\n  }\n",
            ])),
          function (e) {
            return e.theme.breakpoints.normal;
          }
        ),
        $o = l.d.div(
          Xa || (Xa = Object(ce.a)(["\n  display: inline-flex;\n  ", "\n"])),
          function (e) {
            var n = e.space,
              t = e.theme;
            return (
              n &&
              "\n    margin-right: 10px;\n    @media ".concat(
                t.breakpoints.normal,
                "{\n      margin-right: 20px;\n    }\n  "
              )
            );
          }
        ),
        es = t.p + "static/media/eth.b5ca20bf.svg",
        ns = function () {
          var e = Object(ve.a)(se.breakpoints.normal),
            n = e ? 32 : 22;
          return Object(Be.jsxs)(Ii, {
            style: {
              width: "80%",
              maxWidth: 387,
              marginTop: "3rem",
              marginLeft: "auto",
            },
            children: [
              Object(Be.jsxs)(ts, {
                gap: 0,
                children: [
                  Object(Be.jsx)(is, {
                    active: !0,
                    children: Object(Be.jsx)(qi, { children: "Buy" }),
                  }),
                  Object(Be.jsx)(is, {
                    children: Object(Be.jsx)(qi, { children: "Sell" }),
                  }),
                ],
              }),
              Object(Be.jsxs)(rs, {
                children: [
                  Object(Be.jsxs)("div", {
                    style: { display: "flex" },
                    children: [
                      Object(Be.jsx)(os, { size: n, src: es, alt: "cxd-icon" }),
                      Object(Be.jsx)(Yi, { children: "110.5" }),
                    ],
                  }),
                  Object(Be.jsx)(Ji, { children: "\u2248$$$" }),
                ],
              }),
              Object(Be.jsxs)(rs, {
                style: { marginBottom: e ? 20 : 10 },
                children: [
                  Object(Be.jsxs)("div", {
                    style: { display: "flex" },
                    children: [
                      Object(Be.jsx)(os, { size: n, src: zi, alt: "cxd-icon" }),
                      Object(Be.jsx)(Yi, { children: "110.5" }),
                    ],
                  }),
                  Object(Be.jsx)(Ji, { children: "\u2248$$$" }),
                ],
              }),
              Object(Be.jsx)(s.b, {
                to: "/deposit",
                children: Object(Be.jsx)(as, {
                  variant: "contained",
                  size: "medium",
                  isRound: !0,
                  isFullWidth: !0,
                  children: Object(Be.jsx)(qi, { children: "Buy" }),
                }),
              }),
            ],
          });
        },
        ts = Object(l.d)(dn)(
          Ga ||
            (Ga = Object(ce.a)([
              "\n  background: #ffffff;\n  box-shadow: 0px 4px 12px rgba(43, 31, 79, 0.07);\n  padding: 2px;\n  border-radius: 9.95825px;\n  margin-bottom: 10px;\n\n  @media ",
              " {\n    border-radius: 18px;\n    padding: 0.3rem;\n    margin-bottom: 1rem;\n  }\n",
            ])),
          se.breakpoints.normal
        ),
        is = l.d.div(
          Za ||
            (Za = Object(ce.a)([
              "\n  cursor: pointer;\n  text-align: center;\n  color: ",
              ";\n  padding: 7px;\n  border-radius: 9.95825px;\n\n  ",
              "\n  @media ",
              " {\n    padding: 13px;\n    border-radius: 18px;\n  }\n",
            ])),
          se.colors.darkGray,
          function (e) {
            return (
              e.active && "\n    color: #18A974;\n    background: #E8F6F1;\n  "
            );
          },
          se.breakpoints.normal
        ),
        as = Object(l.d)(Un)(
          Ya ||
            (Ya = Object(ce.a)([
              "\n  /* height: 100%; */\n  padding: 7px;\n  border-radius: 9.95825px;\n\n  @media ",
              " {\n    padding: 14px;\n    border-radius: 18px;\n  }\n  @media (min-width: 1001px) {\n    min-width: 233px;\n    font-size: 1rem;\n    font-weight: 700;\n    line-height: 19px;\n  }\n  background: ",
              ";\n",
            ])),
          se.breakpoints.normal,
          se.colors.brandPrimary
        ),
        rs = l.d.div(
          qa ||
            (qa = Object(ce.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 2px solid #eaecf2;\n  padding: 5px 8px;\n  margin-bottom: 4px;\n\n  border-radius: 9.95825px;\n  h5 {\n    font-family: 'Aeonik Bold';\n  }\n  @media ",
              " {\n    padding: 10px;\n    border-radius: 18px;\n    margin-bottom: 7px;\n  }\n",
            ])),
          se.breakpoints.normal
        ),
        os = Object(l.d)(hi)(
          Ja ||
            (Ja = Object(ce.a)([
              "\n  img {\n    width: 100%;\n  }\n  margin-right: 0.8rem;\n",
            ]))
        ),
        ss = function () {
          var e = va(
              "https://cxd-data-api-xsehdlynwa-ue.a.run.app/platform"
            ).res,
            n = Object(ve.a)(se.breakpoints.normal),
            t = Object(ve.a)("(min-width: 936px)"),
            a = Object(ve.a)(se.breakpoints.tablet),
            r = Object(Si.b)(),
            o = Object(Si.b)(),
            c = Object(Si.b)(),
            d = Object(Bi.a)(),
            l = Object(W.a)(d, 2),
            u = l[0],
            p = l[1],
            b = Object(Bi.a)(),
            m = Object(W.a)(b, 2),
            j = m[0],
            h = m[1],
            f = Object(Bi.a)(),
            x = Object(W.a)(f, 2),
            y = x[0],
            g = x[1],
            O = 0.015,
            v = -0.015;
          return (
            Object(i.useEffect)(
              function () {
                p && r.start("visible");
              },
              [r, p]
            ),
            Object(i.useEffect)(
              function () {
                h && o.start("visible");
              },
              [o, h]
            ),
            Object(i.useEffect)(
              function () {
                g && c.start("visible");
              },
              [c, g]
            ),
            Object(Be.jsxs)(Hi, {
              children: [
                Object(Be.jsx)(ys, { src: Go, alt: "Green Fade" }),
                Object(Be.jsxs)(Ni, {
                  children: [
                    Object(Be.jsxs)(ds, {
                      main: !0,
                      children: [
                        Object(Be.jsxs)(hs, {
                          children: [
                            Object(Be.jsx)(Ui, {
                              speed: O,
                              style: { height: "100%" },
                              children: Object(Be.jsxs)(fs, {
                                col: "40% 60%",
                                height: n ? "300px" : "150px",
                                top: 0,
                                width: n ? null : "93%",
                                children: [
                                  Object(Be.jsx)(js, { color: "green" }),
                                  Object(Be.jsx)(js, { color: "green" }),
                                ],
                              }),
                            }),
                            Object(Be.jsx)(Ui, {
                              speed: v,
                              children: Object(Be.jsx)(ns, {}),
                            }),
                          ],
                        }),
                        Object(Be.jsx)(cs, {
                          ref: u,
                          variants: Qi,
                          initial: "hidden",
                          animate: r,
                          children: Object(Be.jsxs)(xs, {
                            children: [
                              "Instantly begin earning",
                              " ",
                              Object(Be.jsxs)(ls, {
                                children: [tn(e, 18, te), " APR"],
                              }),
                              " by simply purchasing the Index Token.",
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(Be.jsxs)(ds, {
                      col: t ? "55% 45%" : "1fr 1fr",
                      main: !0,
                      children: [
                        a &&
                          Object(Be.jsxs)(xs, {
                            width: "90%",
                            style: { padding: 0 },
                            children: [
                              "Broad and diversified exposure to the",
                              " ",
                              Object(Be.jsx)(ls, {
                                children: "Curve/Convex Ecosystem",
                              }),
                            ],
                          }),
                        Object(Be.jsxs)(hs, {
                          children: [
                            Object(Be.jsx)(Ui, {
                              speed: O,
                              style: { height: "100%" },
                              children: Object(Be.jsxs)(fs, {
                                col: "40% 60%",
                                height: n ? "300px" : "150px",
                                top: n ? "8%" : "5%",
                                width: "85%",
                                right: "12%",
                                children: [
                                  Object(Be.jsx)(js, { color: "green" }),
                                  Object(Be.jsx)(js, { color: "green" }),
                                ],
                              }),
                            }),
                            Object(Be.jsx)(Ui, {
                              speed: v,
                              children: Object(Be.jsx)(Ko, {}),
                            }),
                          ],
                        }),
                        !a &&
                          Object(Be.jsx)(cs, {
                            ref: j,
                            variants: Qi,
                            initial: "hidden",
                            animate: o,
                            children: Object(Be.jsxs)(xs, {
                              style: { padding: 0 },
                              children: [
                                "Broad and diversified exposure to the",
                                " ",
                                Object(Be.jsx)(ls, {
                                  children: "Curve/Convex Ecosystem",
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                    Object(Be.jsxs)(ds, {
                      col: t ? "55% 45%" : "60% 40%",
                      main: !0,
                      children: [
                        Object(Be.jsxs)(hs, {
                          children: [
                            Object(Be.jsx)(fs, {
                              default: !0,
                              height: n ? "300px" : "150px",
                              top: "-30%",
                              width: "75%",
                              children: Object(Be.jsxs)(Ui, {
                                speed: O,
                                style: { height: "100%" },
                                children: [
                                  Object(Be.jsx)(js, {
                                    color: "green",
                                    style: { marginBottom: 20 },
                                    height: "30%",
                                  }),
                                  Object(Be.jsx)(js, {
                                    color: "green",
                                    height: "55%",
                                  }),
                                ],
                              }),
                            }),
                            Object(Be.jsx)(Ui, {
                              speed: v,
                              children: Object(Be.jsxs)(ds, {
                                style: { margin: 0, gridGap: 20 },
                                full: !0,
                                children: [
                                  Object(Be.jsx)("div", {
                                    style: {
                                      maxWidth: 175,
                                      width: "100%",
                                      position: "relative",
                                      marginLeft: "auto",
                                      height: "100%",
                                    },
                                    children: Object(Be.jsxs)("div", {
                                      style: {
                                        position: "absolute",
                                        top: "-12%",
                                        right: 0,
                                      },
                                      children: [
                                        Object(Be.jsxs)(Ii, {
                                          children: [
                                            Object(Be.jsx)(ms, {
                                              children: "Home",
                                            }),
                                            Object(Be.jsx)(ms, {
                                              color: se.colors.brandPrimary,
                                              children: "Trade idxCVX",
                                            }),
                                            Object(Be.jsx)(ms, {
                                              children: "Lock CXD",
                                            }),
                                            Object(Be.jsx)(ms, {
                                              children: "Liquidity Pools",
                                            }),
                                          ],
                                        }),
                                        Object(Be.jsx)(s.b, {
                                          to: "/deposit",
                                          children: Object(Be.jsx)(gs, {
                                            variant: "contained",
                                            size: "medium",
                                            isRound: !0,
                                            isFullWidth: !0,
                                            children: Object(Be.jsx)(qi, {
                                              children: "Sell",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(Be.jsxs)(Ii, {
                                    children: [
                                      Object(Be.jsx)(us, {
                                        color: se.colors.darkPrimary,
                                        children: "My balance",
                                      }),
                                      Object(Be.jsxs)("div", {
                                        style: {
                                          display: "flex",
                                          alignItems: "flex-end",
                                          marginTop: n ? 20 : 10,
                                        },
                                        children: [
                                          Object(Be.jsx)(Os, {
                                            size: n ? 40 : 20,
                                            src: zi,
                                            alt: "cxd icon",
                                          }),
                                          Object(Be.jsx)(ps, {
                                            children: "64.20",
                                          }),
                                          Object(Be.jsx)(bs, {
                                            children: "idxCVX",
                                          }),
                                        ],
                                      }),
                                      Object(Be.jsx)(Ji, {
                                        style: {
                                          textAlign: "center",
                                          fontWeight: 500,
                                          marginTop: 8,
                                        },
                                        children: "Value: $$$",
                                      }),
                                      Object(Be.jsxs)("div", {
                                        style: {
                                          display: "flex",
                                          alignItems: "flex-end",
                                          marginTop: n ? 20 : 10,
                                        },
                                        children: [
                                          Object(Be.jsx)(Os, {
                                            size: n ? 40 : 20,
                                            src: Xo,
                                            alt: "cortex dao icon",
                                          }),
                                          Object(Be.jsx)(ps, {
                                            children: "10.60",
                                          }),
                                          Object(Be.jsx)(bs, {
                                            children: "CXD",
                                          }),
                                        ],
                                      }),
                                      Object(Be.jsx)(Ji, {
                                        style: {
                                          textAlign: "center",
                                          fontWeight: 500,
                                          marginTop: 8,
                                        },
                                        children: "Value: $$$",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(Be.jsx)(cs, {
                          ref: y,
                          variants: Qi,
                          initial: "hidden",
                          animate: c,
                          children: Object(Be.jsxs)(xs, {
                            width: "80%",
                            children: [
                              Object(Be.jsx)(ls, {
                                children: " No commitment.",
                              }),
                              Object(Be.jsx)("br", {}),
                              " Sell your Index Token any time.",
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        cs = Object(l.d)(Si.a.div)(Ka || (Ka = Object(ce.a)([""]))),
        ds = l.d.div(
          Qa ||
            (Qa = Object(ce.a)([
              "\n  display: grid;\n  grid-template-columns: ",
              ";\n  margin: 0 auto 4rem;\n  justify-content: center;\n  width: ",
              ";\n  align-items: center;\n  @media ",
              " {\n    align-items: start;\n  }\n  @media ",
              " {\n    width: ",
              ";\n  }\n  ",
              "\n",
            ])),
          function (e) {
            return e.col || "1fr 1fr";
          },
          function (e) {
            return e.full, "100%";
          },
          function (e) {
            return e.theme.breakpoints.normal;
          },
          function (e) {
            return e.theme.breakpoints.widescreen;
          },
          function (e) {
            return e.full ? "100%" : "90%";
          },
          function (e) {
            return (
              e.main &&
              "\n      @media (max-width: 500px) {\n        display: block;\n        margin-bottom: 5rem;\n      }\n    "
            );
          }
        ),
        ls = l.d.span(
          _a || (_a = Object(ce.a)(["\n  font-family: 'Aeonik Bold';\n"]))
        ),
        us = Object(l.d)(Yi)(
          $a ||
            ($a = Object(ce.a)([
              "\n  @media (max-width: 768px) {\n    font-size: 11.8527px;\n    line-height: 13px;\n  }\n",
            ]))
        ),
        ps = Object(l.d)(Zi)(
          er ||
            (er = Object(ce.a)([
              "\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 24px;\n  @media ",
              " {\n    font-size: 28px;\n    line-height: 41px;\n  }\n  @media ",
              " {\n    font-size: 34px;\n    line-height: 41px;\n  }\n",
            ])),
          function (e) {
            return e.theme.breakpoints.normal;
          },
          function (e) {
            return e.theme.breakpoints.widescreen;
          }
        ),
        bs = l.d.span(
          nr ||
            (nr = Object(ce.a)([
              "\n  font-family: 'Plus Jakarta Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 6.46512px;\n  line-height: 7px;\n\n  color: ",
              ";\n  margin-bottom: 0.5rem;\n  margin-left: 0.3rem;\n  @media ",
              " {\n    font-size: 12px;\n    line-height: 13px;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.darkGray;
          },
          function (e) {
            return e.theme.breakpoints.normal;
          }
        ),
        ms = Object(l.d)(Ji)(
          tr ||
            (tr = Object(ce.a)([
              "\n  font-family: 'Aeonik Bold';\n  color: ",
              ";\n  margin-bottom: 1rem;\n  &:last-child {\n    margin: 0;\n  }\n",
            ])),
          function (e) {
            return e.color || se.colors.darkPrimary;
          }
        ),
        js = Object(l.d)(Ii)(
          ir ||
            (ir = Object(ce.a)([
              "\n  height: ",
              ";\n  mix-blend-mode: multiply;\n",
            ])),
          function (e) {
            return e.height || "100%";
          }
        ),
        hs = l.d.div(
          ar ||
            (ar = Object(ce.a)([
              "\n  position: relative;\n  display: block;\n  width: 90%;\n  max-width: 300px;\n  margin: 0 auto;\n  margin-bottom: 2rem;\n  @media ",
              " {\n    margin: 0;\n    max-width: none;\n  }\n",
            ])),
          function (e) {
            return e.theme.breakpoints.tablet;
          }
        ),
        fs = Object(l.d)(Si.a.div)(
          rr ||
            (rr = Object(ce.a)([
              "\n  position: absolute;\n  top: ",
              ";\n  ",
              "\n  ",
              "\n  width: ",
              ";\n  padding: 20px;\n  z-index: -1;\n  ",
              "\n  height: ",
              ";\n",
            ])),
          function (e) {
            return e.top || 0;
          },
          function (e) {
            return e.right ? "right: ".concat(e.right, ";") : "";
          },
          function (e) {
            return e.left ? "left: ".concat(e.right, ";") : "";
          },
          function (e) {
            return e.width || "80%";
          },
          function (e) {
            return (
              !e.default &&
              "\n    display: grid;\n    grid-template-columns: ".concat(
                e.col,
                ";\n    grid-gap: 20px;\n  "
              )
            );
          },
          function (e) {
            return e.height;
          }
        ),
        xs = Object(l.d)(Yi)(
          or ||
            (or = Object(ce.a)([
              "\n  // padding: ",
              ";\n  width: ",
              ";\n  font-weight: 500;\n  margin-right: auto;\n  margin-left: auto;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n\n  @media ",
              " {\n    text-align: left;\n  }\n\n  @media ",
              " {\n    font-size: 28px;\n    line-height: 44px;\n    width: ",
              ";\n  }\n  @media ",
              " {\n    font-size: 40px;\n    line-height: 46px;\n  }\n",
            ])),
          se.space[6],
          function (e) {
            return e.width || "100%";
          },
          function (e) {
            return e.theme.breakpoints.tablet;
          },
          function (e) {
            return e.theme.breakpoints.normal;
          },
          function (e) {
            return e.width || "75%";
          },
          function (e) {
            return e.theme.breakpoints.widescreen;
          }
        ),
        ys = l.d.img(
          sr ||
            (sr = Object(ce.a)([
              "\n  position: absolute;\n  top: 4rem;\n  z-index: -1;\n  left: 0;\n",
            ]))
        ),
        gs = Object(l.d)(Un)(
          cr ||
            (cr = Object(ce.a)([
              "\n  /* height: 100%; */\n\n  padding: 7px;\n  border-radius: 9.95825px;\n  min-width: 100%;\n  @media ",
              " {\n    padding: 14px;\n    border-radius: 18px;\n  }\n  @media (min-width: 1001px) {\n    width: 100%;\n    font-size: 1rem;\n    font-weight: 700;\n    line-height: 19px;\n  }\n  background: ",
              ";\n  margin-top: 1rem;\n",
            ])),
          se.breakpoints.normal,
          se.colors.brandPrimary
        ),
        Os = Object(l.d)(hi)(
          dr ||
            (dr = Object(ce.a)([
              "\n  img {\n    width: 100%;\n  }\n  margin-right: 0.8rem;\n",
            ]))
        ),
        vs = t.p + "static/media/tokenomic-circle.4bb8e1af.png",
        ws = t.p + "static/media/triple-arrows.b5a8cfc5.svg",
        ks = t.p + "static/media/dao-banner.cdb6c76e.png",
        As = t.p + "static/media/tokenomics-banner-bg.44a7204d.png",
        Cs = function () {
          var e = Object(ve.a)("(min-width: 700px)");
          return Object(Be.jsxs)(Ts, {
            id: "dao",
            children: [
              Object(Be.jsxs)(Ds, {
                children: [
                  Object(Be.jsx)(Rs, { src: As }),
                  Object(Be.jsxs)(Ls, {
                    children: [
                      Object(Be.jsx)(Ms, {
                        children: Object(Be.jsxs)(Zi, {
                          children: [
                            Object(Be.jsx)(Es, { children: "Understanding" }),
                            " Cortex Tokenomics",
                          ],
                        }),
                      }),
                      Object(Be.jsx)("a", {
                        href: "https://docs.cortexdao.com/the-convex-index/whitepaper",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: Object(Be.jsx)(Fs, {
                          variant: "contained",
                          size: "medium",
                          isFullWidth: !e,
                          isRound: !0,
                          children: "Read Whitepaper",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(Be.jsxs)(Ds, {
                dark: !0,
                children: [
                  Object(Be.jsx)(Rs, { src: ks }),
                  Object(Be.jsxs)(Ls, {
                    children: [
                      Object(Be.jsxs)(Ms, {
                        children: [
                          Object(Be.jsx)(Zi, {
                            children: Object(Be.jsx)(Es, {
                              children: "Contribute",
                            }),
                          }),
                          Object(Be.jsxs)(Zi, {
                            style: { display: "flex", alignItems: "center" },
                            children: [
                              " ",
                              "to the",
                              " ",
                              Object(Be.jsx)(zs, {
                                size: 30,
                                src: Xo,
                                alt: "Cortex Dao icon",
                              }),
                              "DAO",
                            ],
                          }),
                        ],
                      }),
                      Object(Be.jsx)("a", {
                        href: "https://twitter.com/CortexDAO",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: Object(Be.jsx)(Fs, {
                          variant: "contained",
                          size: "medium",
                          isFullWidth: !e,
                          isRound: !0,
                          children: "Contribute",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Ts = l.d.div(
          lr ||
            (lr = Object(ce.a)([
              "\n  padding-top: 7rem;\n\n  @media (min-width: 700px) {\n    padding-top: 10rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 20px;\n  }\n",
            ]))
        ),
        Ms = l.d.div(ur || (ur = Object(ce.a)([""]))),
        Es = l.d.span(
          pr || (pr = Object(ce.a)(["\n  color: ", ";\n  display: block;\n"])),
          se.colors.brandPrimary
        ),
        Rs = l.d.img(
          br || (br = Object(ce.a)(["\n  width: 100%;\n  height: auto;\n"]))
        ),
        Ds = l.d.div(
          mr ||
            (mr = Object(ce.a)([
              "\n  position: relative;\n  background: ",
              ";\n  border-radius: 10px;\n  overflow: hidden;\n  ",
              "\n  margin-bottom: 1.25rem;\n  @media ",
              " {\n    margin: 0;\n  }\n",
            ])),
          function (e) {
            return e.dark
              ? "linear-gradient(107.6deg, #1A202E 12.63%, #374055 62.04%)"
              : "linear-gradient(107.6deg, #F1F1F1 12.63%, #E6E6E6 62.04%)";
          },
          function (e) {
            return (
              e.dark &&
              "\n    "
                .concat(Zi, " {\n      color: #fff\n    }\n    ")
                .concat(Es, " {\n      color: ")
                .concat(se.colors.hoverPrimary, ";\n    }\n\n  \n  ")
            );
          },
          se.breakpoints.normal
        ),
        Ls = l.d.div(
          jr ||
            (jr = Object(ce.a)([
              "\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  ",
              " {\n    flex-grow: 1;\n  }\n  ",
              " {\n    @media ",
              " and (max-width: 700px) {\n      font-size: 32px;\n      line-height: 47px;\n    }\n  }\n  padding: 1rem;\n  @media (min-width: 935px) {\n    padding: 3.25rem;\n  }\n",
            ])),
          Ms,
          Zi,
          se.breakpoints.tablet
        ),
        Fs = Object(l.d)(Un)(
          hr ||
            (hr = Object(ce.a)([
              "\n  padding: 14px;\n  border-radius: 10px;\n  @media (min-width: 1001px) {\n    width: 230px;\n    font-size: 1rem;\n    font-weight: 700;\n    line-height: 19px;\n  }\n  background: ",
              ";\n  margin-top: 1rem;\n",
            ])),
          se.colors.brandPrimary
        ),
        zs = Object(l.d)(hi)(
          fr ||
            (fr = Object(ce.a)([
              "\n  img {\n    width: 100%;\n  }\n  margin: 0 0.5rem;\n  margin-bottom: 10px;\n",
            ]))
        ),
        Ss = function () {
          var e = Object(ve.a)(se.breakpoints.tablet),
            n = e ? 42 : 18,
            t = e ? 40 : 14;
          return Object(Be.jsx)(Hi, {
            id: "tokenomics",
            children: Object(Be.jsxs)(Ni, {
              children: [
                Object(Be.jsxs)("div", {
                  style: { position: "relative" },
                  children: [
                    Object(Be.jsx)(Hs, { src: vs }),
                    Object(Be.jsxs)(Bs, {
                      children: [
                        Object(Be.jsx)(Ns, {
                          children: Object(Be.jsx)(Xi, {
                            children: "Tokenomics",
                          }),
                        }),
                        Object(Be.jsxs)(Vs, {
                          top: "0px",
                          left: "0px",
                          right: "0px",
                          style: { margin: "0 auto" },
                          children: [
                            Object(Be.jsx)(Us, {
                              size: t,
                              src: ws,
                              alt: "arrow",
                            }),
                            Object(Be.jsx)(Ws, {
                              space: !0,
                              children: Object(Be.jsxs)(Xs, {
                                children: [
                                  Object(Be.jsx)(Us, {
                                    size: n,
                                    src: zi,
                                    alt: "CXD icon",
                                  }),
                                  Object(Be.jsxs)(Is, {
                                    size: "md",
                                    children: [
                                      "Stake ",
                                      !e && Object(Be.jsx)("br", {}),
                                      " ",
                                      Object(Be.jsx)(Ps, {
                                        gradient: !0,
                                        children: "idxCVX",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            Object(Be.jsx)(Us, {
                              size: t,
                              src: ws,
                              alt: "arrow ",
                            }),
                          ],
                        }),
                        Object(Be.jsx)(Vs, {
                          top: "40%",
                          left: "auto",
                          right: "0px",
                          style: { margin: "0 auto" },
                          children: Object(Be.jsx)(Ws, {
                            children: Object(Be.jsxs)(Xs, {
                              children: [
                                Object(Be.jsx)(Us, {
                                  size: n,
                                  src: zi,
                                  alt: "CXD icon",
                                }),
                                Object(Be.jsxs)(Is, {
                                  size: "md",
                                  children: [
                                    "Earn ",
                                    !e && Object(Be.jsx)("br", {}),
                                    " ",
                                    Object(Be.jsx)(Ps, {
                                      gradient: !0,
                                      children: "idxCVX",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        Object(Be.jsxs)(Vs, {
                          bottom: "0px",
                          left: "0px",
                          right: "0px",
                          style: { margin: "0 auto" },
                          children: [
                            Object(Be.jsx)(Us, {
                              size: t,
                              src: ws,
                              alt: "arrow",
                              reverse: !0,
                            }),
                            Object(Be.jsx)(Ws, {
                              space: !0,
                              children: Object(Be.jsxs)(Xs, {
                                children: [
                                  Object(Be.jsx)(Us, {
                                    size: n,
                                    src: Xo,
                                    alt: "Cortex Dao icon",
                                  }),
                                  Object(Be.jsxs)(Is, {
                                    size: "md",
                                    children: [
                                      "Lock ",
                                      !e && Object(Be.jsx)("br", {}),
                                      " ",
                                      Object(Be.jsx)(Ps, { children: "CXD" }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            Object(Be.jsx)(Us, {
                              size: t,
                              src: ws,
                              alt: "arrow",
                              reverse: !0,
                            }),
                          ],
                        }),
                        Object(Be.jsx)(Vs, {
                          top: "40%",
                          right: "auto",
                          left: "0px",
                          style: { margin: "0 auto" },
                          children: Object(Be.jsx)(Ws, {
                            children: Object(Be.jsxs)(Xs, {
                              children: [
                                Object(Be.jsx)(Us, {
                                  size: n,
                                  src: Xo,
                                  alt: "CXD icon",
                                }),
                                Object(Be.jsxs)(Is, {
                                  size: "md",
                                  children: [
                                    "Earn ",
                                    !e && Object(Be.jsx)("br", {}),
                                    " ",
                                    Object(Be.jsx)(Ps, { children: "CXD" }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Object(Be.jsx)(Cs, {}),
              ],
            }),
          });
        },
        Bs = l.d.div(
          xr ||
            (xr = Object(ce.a)([
              "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n\n  @media ",
              " {\n  }\n",
            ])),
          se.breakpoints.tablet
        ),
        Ps = l.d.span(
          yr || (yr = Object(ce.a)(["\n  color: ", ";\n  ", "\n"])),
          se.colors.brandPrimary,
          function (e) {
            return (
              e.gradient &&
              '\n    background-image: linear-gradient(92.98deg, #F10800 -18.93%, #FFDB00 12.77%, #7DFF7A 48.69%, #1CFFDB 83.2%, #0020FF 116.31%);\n    background-size: 100%;\n    font-family: "Aeonik Bold";\n    background-size: 100%;\n    background-repeat: repeat;\n    background-clip: text;\n    text-fill-color: transparent;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  '
            );
          }
        ),
        Is = Object(l.d)(Ji)(
          gr ||
            (gr = Object(ce.a)([
              '\n  font-family: "Aeonik Bold";\n  font-weight: 700;\n  margin-left: 10px;\n  color: ',
              ";\n  @media (max-width: 768px) {\n    font-size: 14px;\n    line-height: 16px;\n  }\n",
            ])),
          se.colors.darkPrimary
        ),
        Vs = l.d.div(
          Or ||
            (Or = Object(ce.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  ",
              "\n",
            ])),
          function (e) {
            return "\n    top: "
              .concat(e.top, ";\n    left: ")
              .concat(e.left, ";\n    right: ")
              .concat(e.right, ";\n    bottom: ")
              .concat(e.bottom, ";\n\n  ");
          }
        ),
        Ws = Object(l.d)(Ii)(
          vr ||
            (vr = Object(ce.a)([
              "\n  ",
              "\n\n  @media (max-width: 768px) {\n    padding: 8px;\n  }\n",
            ])),
          function (e) {
            return e.space ? "margin: 0 1rem;" : "margin: 0;";
          }
        ),
        Hs = l.d.img(
          wr ||
            (wr = Object(ce.a)([
              "\n  width: 95%;\n  height: auto;\n  mix-blend-mode: multiply;\n  display: block;\n  margin: 0 auto;\n  @media ",
              " {\n    width: 78%;\n\n  }\n",
            ])),
          se.breakpoints.normal
        ),
        Ns = l.d.div(
          kr ||
            (kr = Object(ce.a)([
              "\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ",
              " {\n    margin: 0;\n    @media (max-width: 768px) {\n      font-size: 24px;\n      line-height: 22px;\n    }\n  }\n",
            ])),
          Xi
        ),
        Us = Object(l.d)(hi)(
          Ar ||
            (Ar = Object(ce.a)([
              "\n  height: auto;\n  img {\n    width: 100%;\n    height: auto;\n  }\n  ",
              "\n",
            ])),
          function (e) {
            return e.reverse ? "transform: rotate(180deg);" : "";
          }
        ),
        Xs = l.d.div(
          Cr ||
            (Cr = Object(ce.a)([
              "\n  display: flex;\n  align-items: center;\n  max-width: 80px;\n  @media ",
              " {\n    max-width: none;\n  }\n",
            ])),
          se.breakpoints.tablet
        ),
        Gs = t.p + "static/media/cortex-logo-glass.8814a24e.png",
        Zs =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgB7ZI7TsNAEIb/tS2gdAO49BFyBd8gLhByBTkBlqyIFkqkRMoNolQRFlLgBD6COYJLQ+UKQbTssmOIZDYY56Gk8tfsY3a+nX0ALS17xXmILpy4P9bnGbbkOO53TClT6ksD3ZezwdMiZmALSGxAJOVAyNuqmNi4cmd67UqTp0wym8R5MLzR1yxVfhpHV5SIBjEMnvwnhl75yX3UNcBm6vYyCMvLg7usTqxSXQhM8mBwiRp+Vf56PnxUzaRMVAL9BOuIl+TE+wEPJfCsb1AVU7xJTPz5oPYstA/nVqKCHRIxYfpV8ccb94reqMAm8sUGR3MzLU/wwzpiovafF74SiE+vfNxvdcYE91cVE43/3JmGLpg1huS9PBhlaGnZCV+ZPYRKfToRGgAAAABJRU5ErkJggg==",
        Ys = {
          left: [
            "Receive stablecoins as fee distribution from protocol profits. ",
            "Lock CXD to be rewarded for a long-term commitment.",
            "Contribute to the DAO and earn rewards",
          ],
          right: [
            "Govern and grow the protocol. ",
            "Help grow the Curve and Convex ecosystem, a fundamental part of DeFi.",
            "Become a part of the next layer of DeFi.",
          ],
        },
        qs = window.ethereum,
        Js = function () {
          var e = Object(ve.a)(se.breakpoints.normal),
            n = e ? 24 : 22,
            t = Object(Si.b)(),
            a = Object(Bi.a)(),
            r = Object(W.a)(a, 2),
            o = r[0],
            s = r[1];
          Object(i.useEffect)(
            function () {
              s && t.start("visible");
            },
            [t, s]
          );
          return Object(Be.jsx)(ic, {
            id: "cxd-token",
            children: Object(Be.jsxs)(Ks, {
              children: [
                Object(Be.jsxs)(oc, {
                  children: [
                    Object(Be.jsx)(rc, {
                      size: e ? 80 : 40,
                      src: Xo,
                      alt: "Cortex Dao icon",
                    }),
                    Object(Be.jsx)(ac, { children: "Cortex DAO Token" }),
                  ],
                }),
                Object(Be.jsx)(tc, {
                  children: e
                    ? Object(Be.jsxs)(Be.Fragment, {
                        children: [
                          Object(Be.jsx)(Si.a.div, {
                            ref: o,
                            variants: Ki,
                            initial: "hidden",
                            animate: t,
                            children: Ys.left.map(function (e, t) {
                              return Object(Be.jsxs)(
                                sc,
                                {
                                  variants: Qi,
                                  children: [
                                    Object(Be.jsx)(rc, {
                                      size: n,
                                      src: Zs,
                                      alt: "Check icon",
                                    }),
                                    Object(Be.jsxs)(Ji, {
                                      color: "#f4f4f4",
                                      size: "md",
                                      children: [" ", e],
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                          }),
                          e && Object(Be.jsx)(ec, { src: Gs }),
                          Object(Be.jsx)(Si.a.div, {
                            variants: Ki,
                            initial: "hidden",
                            animate: t,
                            children: Ys.right.map(function (e, t) {
                              return Object(Be.jsxs)(
                                sc,
                                {
                                  variants: Qi,
                                  children: [
                                    Object(Be.jsx)(rc, {
                                      size: n,
                                      src: Zs,
                                      alt: "Check icon",
                                    }),
                                    Object(Be.jsxs)(Ji, {
                                      color: "#f4f4f4",
                                      size: "md",
                                      children: [" ", e],
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                          }),
                        ],
                      })
                    : Object(Be.jsxs)(Be.Fragment, {
                        children: [
                          Object(Be.jsx)(Si.a.div, {
                            ref: o,
                            variants: Ki,
                            initial: "hidden",
                            animate: t,
                            style: { paddingLeft: "1rem" },
                            children: []
                              .concat(
                                Object(Te.a)(Ys.left),
                                Object(Te.a)(Ys.right)
                              )
                              .map(function (e, t) {
                                return Object(Be.jsxs)(
                                  sc,
                                  {
                                    variants: Qi,
                                    children: [
                                      Object(Be.jsx)(rc, {
                                        size: n,
                                        src: Zs,
                                        alt: "Check icon",
                                      }),
                                      Object(Be.jsxs)(Ji, {
                                        color: "#f4f4f4",
                                        size: "md",
                                        children: [" ", e],
                                      }),
                                    ],
                                  },
                                  t
                                );
                              }),
                          }),
                          Object(Be.jsx)("div", {
                            style: { position: "relative" },
                            children: Object(Be.jsx)(nc, {}),
                          }),
                        ],
                      }),
                }),
                Object(Be.jsxs)(dc, {
                  children: [
                    Object(Be.jsx)("a", {
                      href: "https://docs.cortexdao.com/tokenomics/usdcxd",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: Object(Be.jsx)(cc, {
                        isFullWidth: !0,
                        children: "Learn more",
                      }),
                    }),
                    Object(Be.jsxs)(uc, {
                      children: [
                        Object(Be.jsxs)("span", {
                          onClick: function () {
                            var e;
                            return (function (e, n) {
                              if (e && n) {
                                var t = e.address,
                                  i = e.symbol,
                                  a = e.decimals,
                                  r = e.image;
                                n.request({
                                  method: "wallet_watchAsset",
                                  params: {
                                    type: "ERC20",
                                    options: {
                                      address: t,
                                      symbol: i,
                                      decimals: a,
                                      image: r,
                                    },
                                  },
                                }).catch(function (e) {
                                  return console.error(e.message);
                                });
                              }
                            })(
                              null === (e = D[Number(qs.chainId)]) ||
                                void 0 === e
                                ? void 0
                                : e.cxd,
                              qs
                            );
                          },
                          style: { cursor: "pointer" },
                          children: [
                            Object(Be.jsx)(_s, {
                              link: !0,
                              children: "Add to Wallet",
                            }),
                            " ",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(Be.jsx)(Qs, {}),
              ],
            }),
          });
        },
        Ks = Object(l.d)(Ni)(
          Tr ||
            (Tr = Object(ce.a)([
              "\n  @media (max-width: 768px) {\n    padding: 0;\n  }\n",
            ]))
        ),
        Qs = l.d.hr(
          Mr ||
            (Mr = Object(ce.a)([
              "\n  border: 1px solid rgba(165, 171, 187, 0.3);\n",
            ]))
        ),
        _s = Object(l.d)(Ji)(
          Er ||
            (Er = Object(ce.a)([
              "\n  font-style: normal;\n  line-height: 110%;\n  color: ",
              ";\n  text-decoration: ",
              ";\n  &:not(:last-child) {\n    margin-bottom: 1rem;\n  }\n\n  @media (max-width: 768px) {\n    font-size: 16px;\n    line-height: 24px;\n  }\n",
            ])),
          function (e) {
            return e.link ? se.colors.brandPrimary : "#A5ABBB";
          },
          function (e) {
            return e.link ? "underline" : "";
          }
        ),
        $s = Object(l.e)(
          Rr ||
            (Rr = Object(ce.a)([
              "\n  0% {\n    transform: translatey(-20px);\n  }\n  50% {\n    transform: translatey(-40px);\n  }\n  100% {\n    transform: translatey(-20px);\n  }\n",
            ]))
        ),
        ec = l.d.img(
          Dr ||
            (Dr = Object(ce.a)([
              "\n  height: 100%;\n  max-width: none;\n  width: auto;\n  @media ",
              " {\n    width: 110%;\n    height: auto;\n    position: relative;\n    animation: ",
              " 6s ease-in-out infinite;\n  }\n",
            ])),
          se.breakpoints.normal,
          $s
        ),
        nc = l.d.div(
          Lr ||
            (Lr = Object(ce.a)([
              "\n  height: 100%;\n  min-height: 350px;\n  background-image: url(",
              ");\n  width: 100%;\n  background-size: 350px;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  animation: ",
              " 6s ease-in-out infinite;\n  @media ",
              " {\n    background-size: auto 350px;\n  }\n",
            ])),
          Gs,
          $s,
          se.breakpoints.tablet
        ),
        tc = l.d.div(
          Fr ||
            (Fr = Object(ce.a)([
              "\n  display: grid;\n  grid-template-columns: 1fr 40%;\n  @media ",
              " {\n    grid-template-columns: 1fr 40% 1fr;\n  }\n  @media ",
              " {\n    align-items: start;\n    grid-template-columns: 1fr 40% 1fr;\n  }\n",
            ])),
          se.breakpoints.normal,
          se.breakpoints.widescreen
        ),
        ic = Object(l.d)(Hi)(
          zr ||
            (zr = Object(ce.a)([
              "\n  background: linear-gradient(107.6deg, #1a202e 12.63%, #374055 62.04%);\n  padding-top: 4rem;\n  padding-bottom: 0;\n  @media ",
              " {\n    padding-top: 90px;\n  }\n",
            ])),
          se.breakpoints.widescreen
        ),
        ac = Object(l.d)(Xi)(
          Sr ||
            (Sr = Object(ce.a)([
              "\n  color: #f4f4f4;\n  width: auto;\n  display: block;\n  margin: 0;\n  margin-left: 10px;\n  @media ",
              " {\n    margin-left: 20px;\n  }\n",
            ])),
          se.breakpoints.normal
        ),
        rc = Object(l.d)(hi)(
          Br ||
            (Br = Object(ce.a)([
              "\n  margin-top: 0px;\n  height: auto;\n  img {\n    width: 100%;\n    height: auto;\n  }\n  @media ",
              " {\n    margin-top: 0.625rem;\n  }\n",
            ])),
          se.breakpoints.normal
        ),
        oc = l.d.div(
          Pr ||
            (Pr = Object(ce.a)([
              "\n  display: flex;\n  justify-content: ",
              ";\n  align-items: center;\n  margin-bottom: 4rem;\n",
            ])),
          function (e) {
            return e.justifyContent || "center";
          }
        ),
        sc = Object(l.d)(Si.a.div)(
          Ir ||
            (Ir = Object(ce.a)([
              "\n  display: grid;\n  grid-template-columns: 30px 1fr;\n  margin-bottom: 1rem;\n  @media ",
              " {\n    grid-template-columns: 22px 1fr;\n    margin-bottom: 3rem;\n    grid-gap: 10px;\n  }\n",
            ])),
          se.breakpoints.normal
        ),
        cc = Object(l.d)(Un)(
          Vr ||
            (Vr = Object(ce.a)([
              "\n  padding: 14px;\n  border-radius: 10px;\n  @media (min-width: 1001px) {\n    width: 100%;\n    font-size: 1rem;\n    font-weight: 700;\n    line-height: 19px;\n  }\n  background: ",
              ";\n  margin-top: 1rem;\n",
            ])),
          se.colors.brandPrimary
        ),
        dc = l.d.div(
          Wr ||
            (Wr = Object(ce.a)([
              "\n  margin: 3rem auto;\n  padding: 0 1rem;\n  @media ",
              " {\n    width: 430px;\n    margin: 0 auto 5rem;\n  }\n  ",
              " {\n    margin-bottom: 20px;\n  }\n  > div {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n\n    @media ",
              " {\n      justify-content: flex-start;\n    }\n    ",
              " {\n      margin-right: 1rem;\n    }\n  }\n",
            ])),
          se.breakpoints.tablet,
          cc,
          se.breakpoints.tablet,
          _s
        ),
        lc = l.d.div(
          Hr ||
            (Hr = Object(ce.a)([
              "\n  padding: 1.2rem 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",
              " {\n    margin-right: 4px;\n  }\n  @media ",
              " {\n    padding: 3rem 0 4rem;\n    ",
              " {\n      margin-right: 20px;\n    }\n  }\n",
            ])),
          Ji,
          se.breakpoints.tablet,
          Ji
        ),
        uc = l.d.div(Nr || (Nr = Object(ce.a)(["\n  margin-left: 60px;\n"]))),
        pc = function () {
          var e = Object(ve.a)(se.breakpoints.normal);
          return Object(Be.jsx)(bc, {
            children: e
              ? Object(Be.jsxs)(Ni, {
                  children: [
                    Object(Be.jsxs)(jc, {
                      children: [
                        Object(Be.jsx)(mc, { color: se.colors.background }),
                        Object(Be.jsxs)(hc, {
                          children: [
                            Object(Be.jsxs)("div", {
                              children: [
                                Object(Be.jsx)(yc, {
                                  smooth: !0,
                                  to: "/#dao",
                                  children: "DAO",
                                }),
                                Object(Be.jsx)(yc, {
                                  smooth: !0,
                                  to: "/#protocol",
                                  children: "Protocol",
                                }),
                              ],
                            }),
                            Object(Be.jsxs)("div", {
                              children: [
                                Object(Be.jsx)(yc, {
                                  smooth: !0,
                                  to: "/#cxd-token",
                                  children: "CXD Token",
                                }),
                                Object(Be.jsx)(yc, {
                                  smooth: !0,
                                  to: "/#tokenomics",
                                  children: "Tokenomics",
                                }),
                              ],
                            }),
                            Object(Be.jsxs)("div", {
                              children: [
                                Object(Be.jsx)(xc, {
                                  dark: !0,
                                  href: "/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: "Terms of service",
                                }),
                                Object(Be.jsx)(xc, {
                                  dark: !0,
                                  href: "/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: "Privacy",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(Be.jsxs)(jc, {
                      children: [
                        Object(Be.jsx)(Ji, {
                          style: { padding: "10px 0" },
                          children: "\xa9 Cortex 2022 All rights reserved.",
                        }),
                        Object(Be.jsxs)(fc, {
                          children: [
                            Object(Be.jsx)(gc, {
                              children: Ut.map(function (e) {
                                return Object(Be.jsx)(
                                  xc,
                                  { href: e.url, children: e.logo },
                                  e.label
                                );
                              }),
                            }),
                            Object(Be.jsx)(xc, {
                              style: { textDecoration: "underline" },
                              children: "Docs",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : Object(Be.jsxs)(Ni, {
                  children: [
                    Object(Be.jsx)(mc, { color: se.colors.background }),
                    Object(Be.jsxs)(dn, {
                      style: { padding: "2rem 0" },
                      children: [
                        Object(Be.jsxs)("div", {
                          children: [
                            Object(Be.jsx)(yc, {
                              smooth: !0,
                              to: "/#dao",
                              children: "DAO",
                            }),
                            Object(Be.jsx)(yc, {
                              smooth: !0,
                              to: "/#protocol",
                              children: "Protocol",
                            }),
                            Object(Be.jsx)(yc, {
                              smooth: !0,
                              to: "/#cxd-token",
                              children: "CXD Token",
                            }),
                            Object(Be.jsx)(yc, {
                              smooth: !0,
                              to: "/#tokenomics",
                              children: "Tokenomics",
                            }),
                          ],
                        }),
                        Object(Be.jsxs)("div", {
                          children: [
                            Object(Be.jsx)(xc, {
                              href: "/https://docs.cortexdao.com/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              style: { textDecoration: "underline" },
                              children: "Docs",
                            }),
                            Object(Be.jsxs)("div", {
                              children: [
                                Object(Be.jsx)(xc, {
                                  dark: !0,
                                  href: "/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: "Terms of service",
                                }),
                                Object(Be.jsx)(xc, {
                                  dark: !0,
                                  href: "/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: "Privacy",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(Be.jsx)(gc, {
                      children: Ut.map(function (e, n) {
                        return Object(Be.jsx)(
                          xc,
                          { href: e.url, children: e.logo },
                          e.label
                        );
                      }),
                    }),
                    Object(Be.jsx)(Ji, {
                      style: {
                        padding: "10px 0",
                        fontSize: 16,
                        marginTop: "1rem",
                      },
                      children: "\xa9 Cortex 2022 All rights reserved.",
                    }),
                  ],
                }),
          });
        },
        bc = Object(l.d)(Hi)(
          Ur ||
            (Ur = Object(ce.a)([
              "\n  background-color: ",
              ";\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  @media ",
              " {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n  @media ",
              " {\n    padding-top: 70px;\n    padding-bottom: 70px;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.darkPrimary;
          },
          function (e) {
            return e.theme.breakpoints.normal;
          },
          function (e) {
            return e.theme.breakpoints.widescreen;
          }
        ),
        mc = Object(l.d)(In)(Xr || (Xr = Object(ce.a)([""]))),
        jc = l.d.div(
          Gr ||
            (Gr = Object(ce.a)([
              "\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n\n  @media ",
              " {\n    grid-template-columns: 45% 1fr;\n  }\n\n  @media ",
              " {\n    grid-template-columns: 1fr 1fr;\n  }\n",
            ])),
          function (e) {
            return e.theme.breakpoints.normal;
          },
          function (e) {
            return e.theme.breakpoints.widescreen;
          }
        ),
        hc = l.d.div(
          Zr ||
            (Zr = Object(ce.a)([
              "\n  @media ",
              " {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    margin-bottom: 7rem;\n  }\n",
            ])),
          function (e) {
            return e.theme.breakpoints.normal;
          }
        ),
        fc = l.d.div(
          Yr ||
            (Yr = Object(ce.a)([
              "\n  @media ",
              " {\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    align-items: start;\n  }\n",
            ])),
          function (e) {
            return e.theme.breakpoints.normal;
          }
        ),
        xc = l.d.a(
          qr ||
            (qr = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n  display: grid;\n  place-items: start;\n  /* height: 100%; */\n  font-weight: 500;\n  cursor: pointer;\n  padding: 10px 0;\n  color: ",
              ";\n  &:hover {\n    color: ",
              ";\n    path {\n      fill: #a5abbb;\n    }\n  }\n",
            ])),
          function (e) {
            return e.dark ? "#A5ABBB" : se.colors.background;
          },
          function (e) {
            return e.theme.colors.brandPrimary;
          }
        ),
        yc = Object(l.d)(Ot.a)(
          Jr ||
            (Jr = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n  display: grid;\n  place-items: start;\n  /* height: 100%; */\n  font-weight: 500;\n  cursor: pointer;\n  padding: 10px 0;\n  color: ",
              ";\n  &:hover {\n    color: ",
              ";\n    path {\n      fill: #a5abbb;\n    }\n  }\n",
            ])),
          function (e) {
            return e.dark ? "#A5ABBB" : se.colors.background;
          },
          function (e) {
            return e.theme.colors.brandPrimary;
          }
        ),
        gc = l.d.div(
          Kr ||
            (Kr = Object(ce.a)([
              "\n  display: flex;\n\n  svg {\n    margin-right: 1.8rem;\n    height: 22px;\n    width: auto;\n    path {\n      fill: ",
              ";\n    }\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.background;
          }
        );
      var Oc,
        vc,
        wc = Object(l.e)(
          Qr ||
            (Qr = Object(ce.a)([
              "\n  0% {\n    transform: translateY(-20px);\n  }\n  50% {\n    transform: translateY(-40px);\n  }\n  100% {\n    transform: translateY(-20px);\n  }\n",
            ]))
        ),
        kc = l.d.img(
          _r ||
            (_r = Object(ce.a)([
              "\n  animation: ",
              " 6s ease-in-out infinite;\n  margin-top: -50px;\n  width: 75%;\n  margin-left: auto;\n  display: block;\n  @media (min-width: 768px) {\n    width: 150%;\n    margin: 0;\n    margin-left: auto;\n  }\n",
            ])),
          wc
        ),
        Ac = l.d.div(
          $r ||
            ($r = Object(ce.a)([
              "\n  width: 50%;\n  max-height: 1000px;\n  height: 100%;\n  mix-blend-mode: multiply;\n  background-image: url(",
              ");\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  background-position: 100% 0px;\n  animation: ",
              " 6s ease-in-out infinite;\n  position: absolute;\n  top: 0;\n  right: 0;\n  @media (max-width: 768px) {\n    min-height: 400px;\n    width: 60%;\n    margin-left: auto;\n    margin-top: -50px;\n  }\n",
            ])),
          we,
          wc
        ),
        Cc = l.d.div(
          eo ||
            (eo = Object(ce.a)([
              "\n  /* border: 2px solid orange; */\n  padding-bottom: 2rem;\n  margin: 0 auto;\n  align-items: start;\n  position: relative;\n  @media (min-width: 768px) {\n    padding-bottom: 2rem;\n    display: grid;\n  }\n\n  @media (min-width: 1001px) {\n    padding-top: 8rem; // ~225px from top; see EW mockup\n  }\n",
            ]))
        ),
        Tc = l.d.div(
          no ||
            (no = Object(ce.a)([
              "\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n\n  @media ",
              " {\n  }\n",
            ])),
          function (e) {
            return e.theme.breakpoints.normal;
          }
        ),
        Mc = l.d.header(
          to ||
            (to = Object(ce.a)([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0 2.5rem;\n  position: relative;\n  max-width: 1200px;\n  @media (min-width: 768px) {\n    height: 75vh;\n    margin-bottom: 0;\n    max-height: 600px;\n    margin-bottom: 3rem;\n    width: 65%;\n  }\n  @media (min-width: 935px) {\n    justify-content: space-between;\n    font-size: 18px;\n    width: 700px;\n  }\n\n  @media (min-width: 1001px) {\n    justify-content: space-between;\n    font-size: 18px;\n    width: 778px;\n  }\n",
            ]))
        ),
        Ec = l.d.h1(
          io ||
            (io = Object(ce.a)([
              "\n  /* border: 1px solid green; */\n  font-family: 'Aeonik Medium';\n  font-size: 40px;\n  font-weight: 500;\n  line-height: 1.25;\n\n  @media (min-width: 501px) {\n    max-width: 600px;\n    font-size: 4rem;\n    line-height: 1.0784;\n  }\n\n  @media (min-width: 1001px) {\n    font-size: 4.75rem;\n  }\n\n  @media (min-width: 1301px) {\n    max-width: 700px;\n    font-size: 102px;\n  }\n",
            ]))
        ),
        Rc = l.d.p(
          ao ||
            (ao = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n  font-family: 'Plus Jakarta Sans';\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 24px;\n  color: ",
              ";\n\n  @media (min-width: 501px) {\n    max-width: 550px;\n    font-size: 18px;\n  }\n\n  @media (min-width: 1001px) {\n    width: 414px;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.darkGray;
          }
        ),
        Dc = l.d.div(
          ro ||
            (ro = Object(ce.a)([
              "\n  /* border: 1px solid orange; */\n  margin-bottom: 2rem;\n  & > :not(:last-child) {\n    display: inline-block;\n    width: 100%;\n    margin-bottom: ",
              ";\n  }\n\n  @media (min-width: 769px) {\n    & > :not(:last-child) {\n      display: initial;\n      width: initial;\n      margin-bottom: initial;\n      margin-right: ",
              ";\n    }\n  }\n",
            ])),
          function (e) {
            var n,
              t = e.theme,
              i = e.gap;
            return null !== (n = t.space[i]) && void 0 !== n ? n : "1rem";
          },
          function (e) {
            var n,
              t = e.theme,
              i = e.gap;
            return null !== (n = t.space[i]) && void 0 !== n ? n : "1rem";
          }
        ),
        Lc = Object(l.d)(Un)(
          oo ||
            (oo = Object(ce.a)([
              "\n  /* height: 100%; */\n  height: 60px;\n\n  @media (min-width: 1001px) {\n    min-width: 233px;\n    font-size: 1rem;\n    font-weight: 700;\n    line-height: 19px;\n  }\n",
            ]))
        ),
        Fc = Object(l.d)(Lc)(
          so ||
            (so = Object(ce.a)([
              "\n  border-color: ",
              ";\n  background-color: ",
              ";\n",
            ])),
          se.colors.brightGray,
          se.colors.whitePrimary
        ),
        zc = l.d.div(
          co ||
            (co = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n  height: 80px;\n  font-size: 20px;\n  font-weight: 500;\n",
            ]))
        ),
        Sc = l.d.div(
          lo ||
            (lo = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n  display: flex;\n  align-items: center;\n\n  > :nth-child(3) {\n    margin-left: 0.5rem;\n  }\n",
            ]))
        ),
        Bc = function () {
          var e = Object(ve.a)("(min-width: 501px)"),
            n = Object(ve.a)("(min-width: 769px)"),
            t = Object(ve.a)("(max-width: 768px)"),
            a = Object(ve.a)("(min-width: 1001px)"),
            r = Object(Si.b)(),
            o = Object(Bi.a)(),
            c = Object(W.a)(o, 2),
            d = c[0],
            l = c[1];
          return (
            Object(i.useEffect)(
              function () {
                l && r.start("visible");
              },
              [r, l]
            ),
            Object(Be.jsxs)(Be.Fragment, {
              children: [
                Object(Be.jsxs)(Cc, {
                  children: [
                    t && Object(Be.jsx)(kc, { src: we }),
                    n && Object(Be.jsx)(Ac, {}),
                    Object(Be.jsx)(Tc, {
                      children: Object(Be.jsxs)(Mc, {
                        children: [
                          Object(Be.jsxs)(cn, {
                            gap: a ? 7 : 6,
                            children: [
                              Object(Be.jsx)(cn, {
                                gap: a ? 5 : 4,
                                children: Object(Be.jsxs)(Si.a.div, {
                                  ref: d,
                                  variants: Ki,
                                  initial: "hidden",
                                  animate: r,
                                  children: [
                                    Object(Be.jsx)(Si.a.div, {
                                      variants: Qi,
                                      children: Object(Be.jsxs)(Ec, {
                                        children: [
                                          "Profit from the",
                                          " ",
                                          Object(Be.jsx)("span", {
                                            style: {
                                              fontFamily: "Aeonik Bold",
                                              fontWeight: 700,
                                            },
                                            children: "Curve Wars.",
                                          }),
                                        ],
                                      }),
                                    }),
                                    Object(Be.jsx)(Si.a.div, {
                                      variants: Qi,
                                      children: Object(Be.jsx)(Rc, {
                                        children:
                                          "Diversified exposure to Curve and Convex through the purchase of a single index token.",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              Object(Be.jsxs)(Dc, {
                                gap: n ? 4 : 2,
                                children: [
                                  Object(Be.jsx)(s.b, {
                                    to: "/home",
                                    children: Object(Be.jsx)(Lc, {
                                      variant: "contained",
                                      size: e ? "large" : "medium",
                                      isRound: !0,
                                      isFullWidth: !n,
                                      children: "Launch App",
                                    }),
                                  }),
                                  Object(Be.jsx)("a", {
                                    href: "https://docs.cortexdao.com/fundamentals/tokenomics-101",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: Object(Be.jsx)(Fc, {
                                      variant: "outlined",
                                      size: e ? "large" : "medium",
                                      isRound: !0,
                                      isFullWidth: !n,
                                      children: "Tokenomics",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          n &&
                            Object(Be.jsx)(zc, {
                              children: Object(Be.jsxs)(Sc, {
                                children: [
                                  Object(Be.jsx)(hi, {
                                    size: 30,
                                    src: Fi,
                                    alt: "cxd-icon",
                                    style: { marginRight: "0.25rem" },
                                  }),
                                  Object(Be.jsx)(Ji, {
                                    children: "CortexDAO governs the",
                                  }),
                                  Object(Be.jsx)(hi, {
                                    size: 30,
                                    src: zi,
                                    alt: "idx-cvx-icon",
                                    style: { marginRight: "0.25rem" },
                                  }),
                                  Object(Be.jsx)(Ji, {
                                    children: "Convex Index.",
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                Object(Be.jsx)(ua, {}),
                Object(Be.jsx)(So, {}),
                Object(Be.jsx)(ss, {}),
                Object(Be.jsx)(Ss, {}),
                Object(Be.jsx)(Js, {}),
                Object(Be.jsx)(pc, {}),
              ],
            })
          );
        };
      function Pc(e, n) {
        var t,
          a = va("https://service.apy.finance/v1/oracle").res,
          r = "latest";
        null !== (t = a.data) &&
          void 0 !== t &&
          t.locked &&
          (r = a.data.lastUnlocked);
        var o = Object(p.b)(
            e && n
              ? [
                  [L[e].dai.address, "balanceOf", n],
                  [L[e].usdc.address, "balanceOf", n],
                  [L[e].tether.address, "balanceOf", n],
                ]
              : []
          ),
          s = o.data,
          c = o.error,
          d = o.mutate,
          l = Object(p.b)(
            e && n
              ? [
                  [L[e].dai.address, "totalSupply"],
                  [L[e].usdc.address, "totalSupply"],
                  [L[e].tether.address, "totalSupply"],
                ]
              : []
          ),
          u = l.data,
          b = l.error,
          m = [];
        if (u && s) {
          var j = [L[e].dai.address, L[e].usdc.address, L[e].tether.address];
          u.forEach(function (e, n) {
            e.isZero() || m.push([j[n], "getAPTValue", s[n], { blockTag: r }]);
          });
        }
        var h,
          f = Object(p.b)((h = m) && 0 !== h.length ? m : []),
          x = f.data,
          y = f.error,
          g = Object(i.useMemo)(
            function () {
              var n, t;
              if (x && e) {
                var i = x
                  .map(function (e) {
                    return Le()(e.toString());
                  })
                  .reduce(function (e, n) {
                    return e.plus(n);
                  }, Le()(0));
                t = Ie(i, D[e].usd.decimals);
              }
              return {
                data: t,
                error:
                  null !== (n = null !== c && void 0 !== c ? c : b) &&
                  void 0 !== n
                    ? n
                    : y,
              };
            },
            [x, e, c, b, y]
          );
        return [Oa(g.data, g.error), d];
      }
      var Ic,
        Vc,
        Wc,
        Hc,
        Nc,
        Uc = Object(l.d)(jn)(
          Oc ||
            (Oc = Object(ce.a)([
              "\n  position: relative;\n  border: ",
              ";\n  border-radius: ",
              ";\n  box-shadow: ",
              ";\n  background-color: ",
              ";\n  padding: ",
              ";\n\n  ",
              "\n",
            ])),
          function (e) {
            var n = e.theme,
              t = e.borderSz,
              i = void 0 === t ? 1 : t,
              a = e.bordered;
            return (
              (void 0 === a || a) &&
              "".concat(i, "px solid ").concat(n.colors.brightGray)
            );
          },
          function (e) {
            return e.theme.borderRadius;
          },
          function (e) {
            return e.shadow && "0px 61px 66px rgba(43, 31, 79, 0.07)";
          },
          function (e) {
            var n = e.theme,
              t = e.backgroundColor;
            return null !== t && void 0 !== t ? t : n.colors.whitePrimary;
          },
          function (e) {
            return e.theme.space[5];
          },
          function (e) {
            var n = e.theme;
            return (
              e.isDisabled &&
              '\n        &:before {\n          content: "";\n          position: absolute;\n          top: 0;\n          left: 0;\n          background: #FFF;\n          border-radius: '.concat(
                n.borderRadius,
                ";\n          width: 100%;\n          height: 100%;\n          opacity: .7;\n          z-index: 1;\n        }\n      "
              )
            );
          }
        ),
        Xc = l.d.div(
          vc ||
            (vc = Object(ce.a)([
              "\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: grid;\n  place-content: center;\n  place-items: center;\n  gap: 1rem;\n  background-color: ",
              ";\n  box-shadow: 0px 4px 12px rgba(43, 31, 79, 0.07);\n  border-radius: 10px;\n  width: 100%;\n  min-height: 50%;\n  padding: ",
              ";\n  font-size: ",
              ";\n  font-weight: 500;\n  text-align: center;\n  line-height: 1.5;\n  z-index: 1;\n",
            ])),
          function (e) {
            return e.theme.colors.lightBrandPrimary;
          },
          function (e) {
            var n,
              t = e.theme,
              i = e.padding;
            return Array.isArray(i)
              ? []
                  .concat(i)
                  .map(function (e) {
                    return t.space[e];
                  })
                  .join(" ")
              : null !== (n = t.space[i]) && void 0 !== n
              ? n
              : "1.5rem 2rem";
          },
          function (e) {
            var n = e.theme,
              t = e.fontSz;
            return t ? "".concat(t, "px") : n.typeScale[3];
          }
        );
      function Gc(e) {
        var n = e.isWalletActive,
          t = e.isLoading,
          i = e.label,
          a = e.icon,
          r = e.primary,
          o = e.secondary,
          s = e.button;
        return Object(Be.jsxs)(cn, {
          gap: 4,
          children: [
            (i || s) &&
              Object(Be.jsxs)(Zc, {
                children: [Object(Be.jsx)("h2", { children: i }), s],
              }),
            Object(Be.jsxs)("div", {
              children: [
                Object(Be.jsxs)(Yc, {
                  children: [
                    a,
                    Object(Be.jsx)("div", {
                      children: n
                        ? t
                          ? Object(Be.jsx)(Se.BeatLoader, {
                              size: 16,
                              color: ne,
                            })
                          : r
                        : We,
                    }),
                  ],
                }),
                Object(Be.jsxs)(qc, {
                  children: [
                    a
                      ? Object(Be.jsx)(Jc, { children: a })
                      : Object(Be.jsx)(Kc, {}),
                    n && !t && o,
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var Zc = Object(l.d)(mn)(
          Ic || (Ic = Object(ce.a)(["\n  position: relative;\n"]))
        ),
        Yc = Object(l.d)(mn).attrs(function () {
          return { align: "center" };
        })(
          Vc ||
            (Vc = Object(ce.a)([
              "\n  font-family: 'Aeonik Bold';\n  font-size: 26px;\n  font-weight: 700;\n\n  @media (min-width: 501px) {\n    font-size: 34px;\n  }\n",
            ]))
        ),
        qc = Object(l.d)(mn).attrs(function () {
          return { align: "center" };
        })(
          Wc ||
            (Wc = Object(ce.a)([
              "\n  font-family: 'Plus Jakarta Sans';\n  font-size: 14px;\n  font-weight: 500;\n  color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.colors.darkGray;
          }
        ),
        Jc = l.d.div(Hc || (Hc = Object(ce.a)(["\n  visibility: hidden;\n"]))),
        Kc = l.d.div(
          Nc || (Nc = Object(ce.a)(["\n  height: 34px;\n  width: 0;\n"]))
        );
      function Qc(e, n, t) {
        var i = Object(p.b)(
            e && n && t ? [D[e][t].address, "balanceOf", n] : []
          ),
          a = i.data,
          r = i.error,
          o = i.mutate;
        return [Oa(e && t && a && Ie(a, D[e][t].decimals), r), o];
      }
      var _c,
        $c,
        ed,
        nd,
        td,
        id,
        ad,
        rd,
        od,
        sd = function () {
          var e = Object(c.c)(),
            n = e.chainId,
            t = e.account,
            i = e.active,
            a = Pc(n, t),
            r = Object(W.a)(a, 1)[0],
            o = va(
              "https://api.coingecko.com/api/v3/simple/price?ids=cortexdao&vs_currencies=usd"
            ).res,
            s = Qc(n, t, "cxd"),
            d = Object(W.a)(s, 1)[0];
          return Object(Be.jsxs)(Uc, {
            as: cn,
            gap: 5,
            children: [
              Object(Be.jsx)("h2", { children: "My Balance" }),
              i
                ? Object(Be.jsxs)(cn, {
                    gap: 5,
                    children: [
                      Object(Be.jsx)(Gc, {
                        isWalletActive: i,
                        isLoading: r.isLoading,
                        icon: Object(Be.jsx)(hi, {
                          src: zi,
                          alt: "idx-cvx-icon",
                          size: 34,
                          style: { marginRight: "0.5rem" },
                        }),
                        primary: Object(Be.jsxs)(Be.Fragment, {
                          children: ["$", He(r.data)],
                        }),
                        secondary: "Account Value",
                      }),
                      Object(Be.jsx)(Gc, {
                        isWalletActive: i,
                        isLoading: d.isLoading,
                        icon: Object(Be.jsx)(hi, {
                          src: Fi,
                          alt: "cxd-icon",
                          size: 34,
                          style: { marginRight: "0.5rem" },
                        }),
                        primary: He(d.data, { units: "CXD" }),
                        secondary: Object(Be.jsx)(Be.Fragment, {
                          children: "Value: ".concat(
                            (function (e, n) {
                              var t;
                              if (e.data && n.data) {
                                var i = n.data.cortexdao.usd;
                                t = e.data.times(i);
                              }
                              return t ? "$".concat(He(t)) : We;
                            })(d, o)
                          ),
                        }),
                      }),
                    ],
                  })
                : Object(Be.jsx)(Zn, {}),
            ],
          });
        },
        cd = function () {
          var e,
            n = va("https://cxd-data-api-xsehdlynwa-ue.a.run.app/platform").res;
          return Object(Be.jsxs)(dd, {
            as: cn,
            gap: 5,
            children: [
              Object(Be.jsxs)("div", {
                children: [
                  Object(Be.jsx)(ld, { children: "TVL" }),
                  Object(Be.jsx)(ud, {
                    children: n.isLoading
                      ? Object(Be.jsx)(Se.BeatLoader, { size: 18, color: ee })
                      : Object(Be.jsx)(Be.Fragment, {
                          children: "$".concat(
                            He(
                              null === (e = n.data) || void 0 === e
                                ? void 0
                                : e.tvl,
                              { decimals: 2 }
                            )
                          ),
                        }),
                  }),
                ],
              }),
              Object(Be.jsxs)("div", {
                children: [
                  Object(Be.jsx)(ld, { children: "APR" }),
                  Object(Be.jsx)(ud, { children: tn(n, 18, ee) }),
                ],
              }),
              Object(Be.jsxs)("div", {
                children: [
                  Object(Be.jsx)(ld, {
                    style: { marginBottom: ".5rem" },
                    children: "Allocations",
                  }),
                  Object(Be.jsx)(pd, {
                    children: Oo.map(function (e) {
                      var n = vo.find(function (n) {
                        return n.id === e;
                      });
                      return Object(Be.jsx)(
                        bd,
                        {
                          src: n.icon,
                          alt: "".concat(n.id, "-allocation-icon"),
                          title: n.name,
                        },
                        n.id
                      );
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        dd = Object(l.d)(jn)(
          _c ||
            (_c = Object(ce.a)([
              "\n  background-color: ",
              ";\n  border-radius: ",
              ";\n  padding: ",
              ";\n  color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.colors.brandPrimary;
          },
          function (e) {
            return e.theme.borderRadius;
          },
          function (e) {
            return e.theme.space[6];
          },
          function (e) {
            return e.theme.colors.whitePrimary;
          }
        ),
        ld = l.d.div(
          $c ||
            ($c = Object(ce.a)([
              "\n  font-family: 'Aeonik Regular';\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.5;\n\n  @media (min-width: 501px) {\n    font-size: 24px;\n  }\n",
            ]))
        ),
        ud = l.d.div(
          ed ||
            (ed = Object(ce.a)([
              "\n  font-family: 'Aeonik Bold';\n  font-size: 30px;\n  font-weight: 700;\n  color: ",
              ";\n\n  @media (min-width: 501px) {\n    font-size: 42px;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.whitePrimary;
          }
        ),
        pd = l.d.div(
          nd ||
            (nd = Object(ce.a)([
              "\n  /* border: 1px solid yellow; */\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 1rem;\n\n  @media (min-width: 769px) {\n    /* display: flex;\n    gap: initial;\n\n    & > :not(:last-child) {\n      margin-right: 1rem;\n    } */\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n",
            ]))
        ),
        bd = l.d.img(
          td ||
            (td = Object(ce.a)([
              "\n  height: 32px;\n\n  @media (min-width: 980px) {\n    height: 42px;\n  }\n",
            ]))
        ),
        md = Object(l.d)(hn)(
          id ||
            (id = Object(ce.a)([
              "\n  display: grid;\n  gap: 1rem;\n\n  @media (min-width: 891px) {\n    /* grid-template-columns: 5fr 3fr; */\n    grid-template-columns: 5fr auto;\n  }\n",
            ]))
        ),
        jd = l.d.div(
          ad ||
            (ad = Object(ce.a)([
              "\n  align-self: start;\n  display: grid;\n  grid-template-rows: auto auto;\n  gap: 1rem;\n  min-width: 400px;\n",
            ]))
        ),
        hd = function () {
          var e = Object(ve.a)("(min-width: 891px)");
          return Object(Be.jsxs)(md, {
            maxWidth: "1000px",
            children: [
              !e && Object(Be.jsx)(sd, {}),
              Object(Be.jsx)(cd, {}),
              e && Object(Be.jsx)(jd, { children: Object(Be.jsx)(sd, {}) }),
            ],
          });
        };
      function fd(e, n) {
        var t = n.type,
          i = n.payload;
        switch (t) {
          case "CHANGE_TOKEN":
            return Object(ke.a)(
              Object(ke.a)({}, e),
              {},
              { selectedToken: i.selectedToken, inputError: null }
            );
          case "CHANGE_AMOUNT":
            return Object(ke.a)(
              Object(ke.a)({}, e),
              {},
              { inputAmount: i.inputAmount, inputError: null }
            );
          case "SHOW_ERROR":
            return Object(ke.a)(
              Object(ke.a)({}, e),
              {},
              { inputError: i.inputError }
            );
          case "START_TRX":
            return Object(ke.a)(Object(ke.a)({}, e), {}, { isTrxPending: !0 });
          case "END_TRX":
            return Object(ke.a)(
              Object(ke.a)({}, e),
              {},
              { isTrxPending: !1, inputAmount: null }
            );
          default:
            return e;
        }
      }
      var xd,
        yd = l.d.button(
          rd ||
            (rd = Object(ce.a)([
              "\n  background: none;\n  border: none;\n  border-radius: 16px;\n  padding: 0.375rem; // 6px;\n  font-family: 'Aeonik Regular';\n  font-size: 1.25rem;\n  font-weight: 400;\n  text-align: center;\n  color: ",
              ";\n  text-transform: capitalize;\n  cursor: pointer;\n\n  ",
              "\n",
            ])),
          function (e) {
            return e.theme.colors.darkGray;
          },
          function (e) {
            var n = e.theme;
            return (
              e.active &&
              "\n      background-color: "
                .concat(n.colors.lightBrandPrimary, ";\n      color: ")
                .concat(n.colors.brandPrimary, ";\n    ")
            );
          }
        ),
        gd = Object(l.d)(jn).attrs(function () {
          return { as: ln, columns: 2, gap: 1 };
        })(
          od ||
            (od = Object(ce.a)([
              "\n  /* border: 1px solid green; */\n  border-radius: 16px;\n  box-shadow: 0px 4px 12px rgba(43, 31, 79, 0.07);\n  padding: 3px;\n",
            ]))
        ),
        Od = ["tabs", "activeTab", "onTabClick", "isDisabled", "children"],
        vd = function (e) {
          var n = e.tabs,
            t = e.activeTab,
            i = e.onTabClick;
          return Object(Be.jsxs)(gd, {
            children: [
              Object(Be.jsx)(yd, {
                active: t === n[0],
                onClick: function () {
                  return i(n[0]);
                },
                children: n[0],
              }),
              Object(Be.jsx)(yd, {
                active: t === n[1],
                onClick: function () {
                  return i(n[1]);
                },
                children: n[1],
              }),
            ],
          });
        },
        wd = function (e) {
          var n = e.tabs,
            t = e.activeTab,
            i = e.onTabClick,
            a = e.isDisabled,
            r = e.children,
            o = Object(Hn.a)(e, Od);
          return Object(Be.jsx)(
            Uc,
            Object(ke.a)(
              Object(ke.a)({ bordered: !1, shadow: !0, isDisabled: a }, o),
              {},
              {
                children: Object(Be.jsxs)(cn, {
                  gap: 6,
                  children: [
                    Object(Be.jsx)(vd, {
                      tabs: n,
                      activeTab: t,
                      onTabClick: i,
                    }),
                    r,
                  ],
                }),
              }
            )
          );
        };
      function kd(e, n, t, a, r) {
        var o = Object(i.useState)(!0),
          s = Object(W.a)(o, 2),
          c = s[0],
          d = s[1],
          l = Object(p.b)(
            e && n && a && r ? [D[e][r].address, "allowance", n, a] : []
          ),
          u = l.data,
          b = l.mutate;
        return (
          Object(i.useEffect)(
            function () {
              if (u && e && r && a) {
                var n = Ie(u, D[e][r].decimals),
                  i = t || "0",
                  o = n.gt(0) && n.gte(i);
                d(o);
              }
            },
            [e, u, t, a, r]
          ),
          [c, b]
        );
      }
      function Ad(e) {
        var n = e.action,
          t = e.isLoading;
        return Object(Be.jsx)(
          Fd,
          Object(ke.a)(
            Object(ke.a)(
              {
                action: n,
                variant: "max" === n ? "outlined" : "contained",
                isRound: !0,
                isLoading: t,
              },
              e
            ),
            {},
            { children: n }
          )
        );
      }
      var Cd,
        Td,
        Md,
        Ed,
        Rd,
        Dd,
        Ld,
        Fd = Object(l.d)(Un)(
          xd ||
            (xd = Object(ce.a)([
              "\n  display: grid;\n  place-items: center;\n  border: 1px solid\n    ",
              ";\n  min-width: 100px;\n  padding: 0.65rem 1.5rem;\n  font-family: 'Aeonik Bold';\n  font-size: 1rem;\n  font-weight: 700;\n  text-transform: uppercase;\n",
            ])),
          function (e) {
            var n = e.theme;
            return "max" === e.action ? n.colors.brightGray : "transparent";
          }
        );
      function zd(e) {
        var n = e.isWalletActive,
          t = e.label,
          i = e.tokenSelect,
          a = e.value,
          r = e.onChange,
          o = e.inputButton,
          s = e.balance,
          c = e.error,
          d = e.isDisabled,
          l = e.showDollarValue,
          u = void 0 !== l && l,
          p = Object(ve.a)("(min-width: 501px)"),
          b = function (e) {
            e.includes(".") &&
              (e = e.substr(0, e.indexOf(".")) + e.substr(e.indexOf("."), 19)),
              r(e);
          };
        return Object(Be.jsxs)(cn, {
          children: [
            Object(Be.jsxs)(Wd, {
              children: [
                Object(Be.jsx)("label", {
                  htmlFor: "tokenInput",
                  children: Object(Be.jsx)("h2", { children: _e(t) }),
                }),
                !p && (n ? o : Object(Be.jsx)(Ad, { action: "max" })),
              ],
            }),
            Object(Be.jsxs)(cn, {
              gap: 2,
              children: [
                Object(Be.jsxs)(Hd, {
                  children: [
                    Object(Be.jsxs)(Nd, {
                      error: c,
                      children: [
                        i({ isDisabled: d }),
                        Object(Be.jsx)(Ud, {
                          disabled: d,
                          id: "tokenInput",
                          name: "tokenInput",
                          type: "number",
                          step: "any",
                          placeholder: "0.00",
                          value: null !== a && void 0 !== a ? a : "",
                          onChange: function (e) {
                            return b(e.target.value);
                          },
                        }),
                        u && Object(Be.jsx)(Xd, { children: "\u2248$0.00" }),
                      ],
                    }),
                    p && (n ? o : Object(Be.jsx)(Ad, { action: "max" })),
                  ],
                }),
                c && Object(Be.jsx)(Zd, { children: c }),
                Object(Be.jsxs)(Gd, {
                  children: [
                    Object(Be.jsx)("span", { children: "Balance: " }),
                    n
                      ? s.isLoading
                        ? Object(Be.jsx)(Se.BeatLoader, { size: 8, color: ne })
                        : He("withdraw" === t ? s.data.toFixed(2) : s.data)
                      : We,
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var Sd,
        Bd,
        Pd,
        Id,
        Vd,
        Wd = l.d.div(
          Cd ||
            (Cd = Object(ce.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  > label > h2 {\n    font-size: 18px;\n  }\n\n  @media (min-width: 501px) {\n    > label > h2 {\n      font-size: 20px;\n    }\n  }\n",
            ]))
        ),
        Hd = l.d.div(
          Td ||
            (Td = Object(ce.a)([
              "\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.space[2];
          }
        ),
        Nd = l.d.div(
          Md ||
            (Md = Object(ce.a)([
              "\n  display: grid;\n  align-items: center;\n  grid-template-columns: auto 1fr auto;\n  gap: 0.75rem;\n  border: 1px solid ",
              ";\n  border-radius: ",
              ";\n  height: 48px;\n  padding: 0rem 1rem;\n\n  ",
              "\n",
            ])),
          function (e) {
            return e.theme.colors.brightGray;
          },
          function (e) {
            return e.theme.borderRadius;
          },
          function (e) {
            var n = e.error,
              t = e.theme;
            return (
              n &&
              "\n      border: 1px solid ".concat(t.colors.danger, ";\n    ")
            );
          }
        ),
        Ud = l.d.input(
          Ed ||
            (Ed = Object(ce.a)([
              "\n  border: none;\n  background-color: transparent;\n  width: 100%;\n  height: 32px;\n  font-family: 'Aeonik Bold';\n  font-size: 26px;\n  font-weight: 700;\n  color: ",
              ";\n\n  &:focus {\n    outline: none;\n  }\n\n  &:disabled {\n    ::placeholder {\n      color: ",
              ";\n    }\n\n    color: ",
              ";\n    cursor: not-allowed;\n  }\n",
            ])),
          function (e) {
            var n = e.theme;
            return e.value ? n.colors.darkPrimary : n.colors.darkGray;
          },
          function (e) {
            return e.theme.colors.brightGray;
          },
          function (e) {
            return e.theme.colors.brightGray;
          }
        ),
        Xd = l.d.span(
          Rd ||
            (Rd = Object(ce.a)([
              "\n  font-family: 'Plus Jakarta Sans';\n  font-size: 1rem;\n  color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.colors.darkGray;
          }
        ),
        Gd = l.d.span(
          Dd ||
            (Dd = Object(ce.a)([
              "\n  font-family: 'Plus Jakarta Sans';\n  font-size: 16px;\n  color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.colors.darkGray;
          }
        ),
        Zd = l.d.span(
          Ld ||
            (Ld = Object(ce.a)([
              "\n  font-family: 'Plus Jakarta Sans';\n  font-size: 16px;\n  color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.colors.danger;
          }
        ),
        Yd = t.p + "static/media/down-chevron.b6e557d6.svg",
        qd = t.p + "static/media/up-chevron.0c66cb8f.svg",
        Jd = {
          dai: { id: "dai", src: Yo, alt: "dai-icon", symbol: "DAI" },
          usdc: { id: "usdc", src: qo, alt: "usdc-icon", symbol: "USDC" },
          tether: { id: "tether", src: Jo, alt: "tether-icon", symbol: "USDT" },
        },
        Kd = function (e) {
          var n = e.value,
            t = e.onSelect,
            a = e.isDisabled,
            r = Object(i.useState)(!1),
            o = Object(W.a)(r, 2),
            s = o[0],
            c = o[1];
          return Object(Be.jsx)(xn, {
            disabled: a,
            isOpen: s,
            setIsOpen: c,
            toggle: function (e) {
              return Object(Be.jsxs)(
                Qd,
                Object(ke.a)(
                  Object(ke.a)({}, e),
                  {},
                  {
                    children: [
                      Object(Be.jsx)(hi, {
                        size: 32,
                        src: Jd[n].src,
                        alt: Jd[n].alt,
                      }),
                      s
                        ? Object(Be.jsx)(hi, { src: qd, alt: "up-chevron" })
                        : Object(Be.jsx)(hi, { src: Yd, alt: "down-chevron" }),
                    ],
                  }
                )
              );
            },
            children: Object(Be.jsx)(_d, {
              children: Object(Be.jsxs)(cn, {
                children: [
                  Object(Be.jsx)("h2", { children: "Select asset" }),
                  Object.values(Jd).map(function (e) {
                    return Object(Be.jsxs)(
                      $d,
                      {
                        type: "button",
                        isSelected: e.symbol === Jd[n].symbol,
                        onClick: function () {
                          return (function (e) {
                            t(e.id), c(!1);
                          })(e);
                        },
                        gap: 4,
                        children: [
                          Object(Be.jsx)(hi, {
                            size: 32,
                            src: e.src,
                            alt: e.alt,
                            style: { marginRight: ".5rem" },
                          }),
                          e.symbol,
                        ],
                      },
                      e.id
                    );
                  }),
                ],
              }),
            }),
          });
        },
        Qd = l.d.button(
          Sd ||
            (Sd = Object(ce.a)([
              "\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  background-color: inherit;\n  cursor: pointer;\n  user-select: none;\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.3;\n  }\n",
            ]))
        ),
        _d = Object(l.d)(kn)(
          Bd ||
            (Bd = Object(ce.a)([
              "\n  top: 3rem;\n  right: initial;\n  box-shadow: 0px 4px 12px rgba(43, 31, 79, 0.07);\n  min-width: 200px;\n",
            ]))
        ),
        $d = Object(l.d)(mn).attrs(function (e) {
          return {
            as: "button",
            justify: e.justify,
            align: "center",
            gap: e.gap,
          };
        })(
          Pd ||
            (Pd = Object(ce.a)([
              "\n  border: none;\n  border-radius: 10px;\n  background-color: inherit;\n  padding: 0.5rem;\n  font-family: 'Aeonik Bold';\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: ",
              ";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",
              "; // Only trigger hover effect is not selected\n    color: ",
              ";\n  }\n\n  &:active {\n    background-color: ",
              ";\n    color: ",
              ";\n  }\n\n  ",
              "\n",
            ])),
          function (e) {
            return e.theme.colors.darkGray;
          },
          function (e) {
            var n = e.theme;
            return !e.isSelected && n.colors.hoverPrimary;
          },
          function (e) {
            return e.theme.colors.whitePrimary;
          },
          function (e) {
            return e.theme.colors.pressedPrimary;
          },
          function (e) {
            return e.theme.colors.whitePrimary;
          },
          function (e) {
            var n = e.theme;
            return (
              e.isSelected &&
              "\n    background-color: "
                .concat(n.colors.brandPrimary, ";\n    color: ")
                .concat(n.colors.whitePrimary, ";\n  ")
            );
          }
        ),
        el = ["isApproved", "onMaxClick", "onApproveClick", "isLoading"],
        nl = function (e) {
          var n = e.isApproved,
            t = e.onMaxClick,
            i = e.onApproveClick,
            a = e.isLoading,
            r = Object(Hn.a)(e, el);
          return Object(Be.jsx)(
            tl,
            Object(ke.a)(
              Object(ke.a)(
                {
                  isApproved: n,
                  variant: n ? "outlined" : "contained",
                  isRound: !0,
                  onClick: n ? t : i,
                  isLoading: a,
                },
                r
              ),
              {},
              { children: n ? "Max" : "Approve" }
            )
          );
        },
        tl = Object(l.d)(Un)(
          Id ||
            (Id = Object(ce.a)([
              "\n  border: 1px solid\n    ",
              ";\n  min-width: 100px;\n  padding: 0.65rem 1.5rem;\n  font-size: 1rem;\n  text-transform: uppercase;\n",
            ])),
          function (e) {
            var n = e.theme;
            return e.isApproved ? n.colors.brightGray : "transparent";
          }
        ),
        il = function (e) {
          var n = e.type,
            t = e.isWalletActive,
            i = e.isApproved,
            a = e.handleApprove,
            r = e.selectedToken,
            o = e.handleChangeAmount,
            s = e.inputAmount,
            c = e.inputError,
            d = e.handleMax,
            l = e.balance,
            u = e.onSubmit,
            p = e.formDispatch,
            b = e.isTrxPending,
            m = function (e) {
              e !== r &&
                p({ type: "CHANGE_TOKEN", payload: { selectedToken: e } });
            };
          return Object(Be.jsxs)(cn, {
            as: "form",
            gap: 6,
            onSubmit: u,
            children: [
              Object(Be.jsx)(zd, {
                isWalletActive: t,
                isDisabled: !t || b,
                label: n,
                tokenSelect: function (e) {
                  return Object(Be.jsx)(
                    Kd,
                    Object(ke.a)({ value: r, onSelect: m }, e)
                  );
                },
                value: s,
                onChange: o,
                inputButton: Object(Be.jsx)(nl, {
                  isLoading: !i && b,
                  disabled: !t || b,
                  isApproved: i,
                  onApproveClick: a,
                  onMaxClick: d,
                }),
                balance: l,
                error: c,
              }),
              Object(Be.jsxs)(cn, {
                gap: 3,
                children: [
                  Object(Be.jsx)(Un, {
                    isLoading: i && b,
                    disabled: !t || !i || b,
                    type: "submit",
                    isFullWidth: !0,
                    isRound: !0,
                    children: _e(n),
                  }),
                  Object(Be.jsxs)(al, {
                    children: [
                      Object(Be.jsx)("li", {
                        children: "Withdrawal fee is 0.1%",
                      }),
                      Object(Be.jsx)("li", {
                        children:
                          "For the first 24 hours after a deposit, there is an additional 5% withdrawal fee",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        al = l.d.ul(
          Vd ||
            (Vd = Object(ce.a)([
              "\n  font-size: 14px;\n  font-weight: 500;\n  color: ",
              ";\n  line-height: 20px;\n  list-style: inside;\n",
            ])),
          function (e) {
            return e.theme.colors.darkGray;
          }
        ),
        rl = function (e) {
          var n,
            t,
            i = e.selectedToken,
            a = e.inputAmount,
            r = e.inputError,
            o = e.isTrxPending,
            s = e.formDispatch,
            l = Object(c.c)(),
            u = l.library,
            p = l.chainId,
            b = l.account,
            m = l.active,
            j = Vn("confirm"),
            h = j.setIsOpen,
            f = j.setPayload,
            x = kd(
              p,
              b,
              a,
              null === (n = L[p]) ||
                void 0 === n ||
                null === (t = n[i]) ||
                void 0 === t
                ? void 0
                : t.address,
              i
            ),
            y = Object(W.a)(x, 2),
            g = y[0],
            O = y[1],
            v = Qc(p, b, i),
            w = Object(W.a)(v, 2),
            k = w[0],
            A = w[1],
            C = Pc(p, b),
            T = Object(W.a)(C, 2)[1],
            M = (function () {
              var e = Object(Me.a)(
                Re.a.mark(function e() {
                  var n, t;
                  return Re.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!g) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (t =
                              null === (n = L[p]) || void 0 === n
                                ? void 0
                                : n[i].address),
                            s({ type: "START_TRX" }),
                            (e.next = 6),
                            en(u, p, i, t, O)
                          );
                        case 6:
                          s({ type: "END_TRX" });
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            E = (function () {
              var e = Object(Me.a)(
                Re.a.mark(function e(n) {
                  var t, r, o, c, l, m, j, x, y, v;
                  return Re.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((n.preventDefault(), u && p && i && g && b)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          return (
                            (t = new d.a.Contract(
                              D[p][i].address,
                              D[p][i].abi,
                              u.getSigner()
                            )),
                            (e.next = 6),
                            t.balanceOf(b)
                          );
                        case 6:
                          if (((r = e.sent), nn(p, i, a, r, s))) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return");
                        case 9:
                          return (
                            (o = L[p][i].id),
                            (c = new d.a.Contract(
                              D[p][o].address,
                              D[p][o].abi,
                              u.getSigner()
                            )),
                            (l = Pe(a, D[p][i].decimals)),
                            (e.next = 14),
                            c.getValueFromUnderlyerAmount(l)
                          );
                        case 14:
                          return (
                            (m = e.sent), (e.next = 17), c.getPoolTotalValue()
                          );
                        case 17:
                          return (
                            (j = e.sent), (e.next = 20), c.reservePercentage()
                          );
                        case 20:
                          (x = e.sent),
                            (y = j.add(m).mul(x).div(x.add(100))),
                            (v = (function () {
                              var e = Object(Me.a)(
                                Re.a.mark(function e() {
                                  return Re.a.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              s({ type: "START_TRX" }),
                                              (e.prev = 1),
                                              (e.next = 4),
                                              $e({
                                                contract: c,
                                                functionName: "addLiquidity",
                                                args: [l],
                                              })
                                            );
                                          case 4:
                                            A(void 0, !0),
                                              T(void 0, !0),
                                              O(void 0, !0),
                                              (e.next = 12);
                                            break;
                                          case 9:
                                            (e.prev = 9),
                                              (e.t0 = e.catch(1)),
                                              console.error(e.t0.message);
                                          case 12:
                                            s({ type: "END_TRX" });
                                          case 13:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [[1, 9]]
                                  );
                                })
                              );
                              return function () {
                                return e.apply(this, arguments);
                              };
                            })()),
                            m.gt(y)
                              ? (h(!0),
                                f({
                                  type: "deposit",
                                  title: "Pool Safeguard Notice",
                                  content: Object(Be.jsxs)(Be.Fragment, {
                                    children: [
                                      "A deposit of this size will likely require multiple withdrawals over a period of time to avoid triggering safeguards.",
                                      Object(Be.jsx)("br", {}),
                                      Object(Be.jsx)("br", {}),
                                      "You can contact us at",
                                      " ",
                                      Object(Be.jsx)("address", {
                                        children: Object(Be.jsx)("a", {
                                          href: "mailto:support@cortexdao.com",
                                          children: "support@cortexdao.com",
                                        }),
                                      }),
                                      "to perform larger single withdrawals.",
                                      Object(Be.jsx)("br", {}),
                                      Object(Be.jsx)("br", {}),
                                      "Would you like to continue with this deposit?",
                                    ],
                                  }),
                                  onContinue: v,
                                }))
                              : v();
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(Be.jsx)(il, {
            type: "deposit",
            isWalletActive: m,
            isApproved: g,
            handleApprove: M,
            selectedToken: i,
            handleChangeAmount: function (e) {
              s({ type: "CHANGE_AMOUNT", payload: { inputAmount: e } });
            },
            inputAmount: a,
            inputError: r,
            handleMax: function () {
              var e;
              return s({
                type: "CHANGE_AMOUNT",
                payload: {
                  inputAmount:
                    null === (e = k.data) || void 0 === e
                      ? void 0
                      : e.toString(),
                },
              });
            },
            balance: k,
            onSubmit: E,
            formDispatch: s,
            isTrxPending: o,
          });
        };
      var ol,
        sl = function (e) {
          var n = e.selectedToken,
            t = e.inputAmount,
            a = e.inputError,
            r = e.isTrxPending,
            o = e.formDispatch,
            s = Object(c.c)(),
            l = s.library,
            u = s.chainId,
            b = s.account,
            m = s.active,
            j = Vn("confirm"),
            h = j.setIsOpen,
            f = j.setPayload,
            x = Object(i.useState)(!1),
            y = Object(W.a)(x, 2),
            g = y[0],
            O = y[1],
            v = (function (e, n, t) {
              var a = Object(p.b)(
                  e && n && t ? [L[e][t].address, "balanceOf", n] : []
                ),
                r = a.data,
                o = a.error,
                s = a.mutate,
                c = Object(p.b)(
                  e && n && t && r
                    ? [L[e][t].address, "getUnderlyerAmount", r]
                    : []
                ),
                d = c.data,
                l = c.error,
                u = Object(i.useMemo)(
                  function () {
                    var n;
                    return (
                      e && t && d && (n = Ie(d, D[e][t].decimals)),
                      { data: n, error: null !== o && void 0 !== o ? o : l }
                    );
                  },
                  [e, t, d, o, l]
                );
              return [Oa(u.data, u.error), s];
            })(u, b, n),
            w = Object(W.a)(v, 2),
            k = w[0],
            A = w[1],
            C = Pc(u, b),
            T = Object(W.a)(C, 2)[1],
            M = (function () {
              var e = Object(Me.a)(
                Re.a.mark(function e(i) {
                  var a, r, s, c, p, m, j, x, y, O, v;
                  return Re.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((i.preventDefault(), l && u && n && b)) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              (a = L[u][n].id),
                              (r = new d.a.Contract(
                                D[u][a].address,
                                D[u][a].abi,
                                l.getSigner()
                              )),
                              (s = new d.a.Contract(
                                D[u][n].address,
                                D[u][n].abi,
                                l.getSigner()
                              )),
                              (e.prev = 6),
                              (e.next = 9),
                              r.balanceOf(b)
                            );
                          case 9:
                            return (
                              (c = e.sent),
                              (e.t0 = Le.a),
                              (e.next = 13),
                              r.getUnderlyerAmount(c)
                            );
                          case 13:
                            (e.t1 = e.sent.toString()),
                              (p = (0, e.t0)(e.t1)),
                              (c = Le()(c.toString())),
                              (e.next = 21);
                            break;
                          case 18:
                            (e.prev = 18),
                              (e.t2 = e.catch(6)),
                              console.error(
                                "Could not fetch account balance:",
                                e.t2.message
                              );
                          case 21:
                            if (c && p) {
                              e.next = 23;
                              break;
                            }
                            return e.abrupt("return");
                          case 23:
                            if (
                              ((m = g ? Ie(p, D[u][n].decimals).toString() : t),
                              nn(u, n, m, p, o))
                            ) {
                              e.next = 26;
                              break;
                            }
                            return e.abrupt("return");
                          case 26:
                            return (
                              g
                                ? (j = d.a.BigNumber.from(c.toFixed()))
                                : ((x = Le()(
                                    Pe(m, D[u][n].decimals).toString()
                                  )),
                                  (y = x.div(p)),
                                  (j = d.a.BigNumber.from(
                                    c.times(y).toFixed(0)
                                  ))),
                              (e.next = 29),
                              r.getUnderlyerAmountWithFee(j)
                            );
                          case 29:
                            return (
                              (O = e.sent),
                              (v = (function () {
                                var e = Object(Me.a)(
                                  Re.a.mark(function e() {
                                    var t;
                                    return Re.a.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                o({ type: "START_TRX" }),
                                                (e.next = 3),
                                                s.balanceOf(r.address)
                                              );
                                            case 3:
                                              if (((t = e.sent), !O.lte(t))) {
                                                e.next = 19;
                                                break;
                                              }
                                              return (
                                                h(!1),
                                                (e.prev = 7),
                                                (e.next = 10),
                                                $e({
                                                  contract: r,
                                                  functionName: "redeem",
                                                  args: [j],
                                                })
                                              );
                                            case 10:
                                              A(void 0, !0),
                                                T(void 0, !0),
                                                (e.next = 17);
                                              break;
                                            case 14:
                                              (e.prev = 14),
                                                (e.t0 = e.catch(7)),
                                                console.error(e.t0.message);
                                            case 17:
                                              e.next = 21;
                                              break;
                                            case 19:
                                              h(!0),
                                                f({
                                                  title: "Insufficient Reserve",
                                                  content: Object(Be.jsxs)(
                                                    Be.Fragment,
                                                    {
                                                      children: [
                                                        "Unable to withdraw due to insufficient reserves.",
                                                        Object(Be.jsx)(
                                                          "br",
                                                          {}
                                                        ),
                                                        Object(Be.jsx)(
                                                          "br",
                                                          {}
                                                        ),
                                                        "Receiving: "
                                                          .concat(
                                                            He(
                                                              Ie(
                                                                O,
                                                                D[u][n].decimals
                                                              )
                                                            ),
                                                            " "
                                                          )
                                                          .concat(
                                                            D[u][n].symbol
                                                          ),
                                                        Object(Be.jsx)(
                                                          "br",
                                                          {}
                                                        ),
                                                        ""
                                                          .concat(
                                                            D[u][n].symbol,
                                                            " Reserves: "
                                                          )
                                                          .concat(
                                                            He(
                                                              Ie(
                                                                t,
                                                                D[u][n].decimals
                                                              )
                                                            )
                                                          ),
                                                        Object(Be.jsx)(
                                                          "br",
                                                          {}
                                                        ),
                                                        Object(Be.jsx)(
                                                          "br",
                                                          {}
                                                        ),
                                                        "For withdraws exceeding the amount of reserves currently available, please contact us using the following",
                                                        " ",
                                                        Object(Be.jsx)("a", {
                                                          href: "https://forms.gle/o3i3Ba6Yk7VZiX4z5",
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          style: { color: ne },
                                                          children: "form.",
                                                        }),
                                                        Object(Be.jsx)(
                                                          "br",
                                                          {}
                                                        ),
                                                        Object(Be.jsx)(
                                                          "br",
                                                          {}
                                                        ),
                                                        "For all other inquiries please contact our support team:",
                                                        " ",
                                                        Object(Be.jsx)(
                                                          "address",
                                                          {
                                                            children: Object(
                                                              Be.jsx
                                                            )("a", {
                                                              href: "mailto:support@cortexdao.com",
                                                              children:
                                                                "support@cortexdao.com",
                                                            }),
                                                          }
                                                        ),
                                                      ],
                                                    }
                                                  ),
                                                });
                                            case 21:
                                              o({ type: "END_TRX" });
                                            case 22:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[7, 14]]
                                    );
                                  })
                                );
                                return function () {
                                  return e.apply(this, arguments);
                                };
                              })()),
                              (e.next = 33),
                              r.isEarlyRedeem()
                            );
                          case 33:
                            e.sent
                              ? (h(!0),
                                f({
                                  type: "withdraw",
                                  title: "Early Withdrawal Fee",
                                  content: Object(Be.jsxs)(Be.Fragment, {
                                    children: [
                                      "This withdrawal is within 24 hours of your deposit. You'll be charged a 5% fee in addition to the 0.1% fee charged on all withdrawals.",
                                      Object(Be.jsx)("br", {}),
                                      Object(Be.jsx)("br", {}),
                                      "Receiving: "
                                        .concat(
                                          He(Ie(O, D[u][n].decimals)),
                                          " "
                                        )
                                        .concat(D[u][n].symbol),
                                      Object(Be.jsx)("br", {}),
                                      Object(Be.jsx)("br", {}),
                                      "Would you like to continue?",
                                    ],
                                  }),
                                  onContinue: v,
                                }))
                              : (h(!0),
                                f({
                                  type: "withdraw",
                                  title: "Withdrawal Fee",
                                  content: Object(Be.jsxs)(Be.Fragment, {
                                    children: [
                                      "A 0.1% fee is charged on all withdrawals.",
                                      Object(Be.jsx)("br", {}),
                                      Object(Be.jsx)("br", {}),
                                      "Receiving: "
                                        .concat(
                                          He(Ie(O, D[u][n].decimals)),
                                          " "
                                        )
                                        .concat(D[u][n].symbol),
                                      Object(Be.jsx)("br", {}),
                                      Object(Be.jsx)("br", {}),
                                      "Would you like to continue?",
                                    ],
                                  }),
                                  onContinue: v,
                                }));
                          case 35:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[6, 18]]
                  );
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(Be.jsx)(il, {
            type: "withdraw",
            isWalletActive: m,
            isApproved: !0,
            selectedToken: n,
            handleChangeAmount: function (e) {
              var n,
                t = e,
                i =
                  null === (n = k.data) || void 0 === n ? void 0 : n.toFixed(2);
              parseFloat(t) === parseFloat(i) ? O(!0) : O(!1),
                o({ type: "CHANGE_AMOUNT", payload: { inputAmount: e } });
            },
            inputAmount: t,
            inputError: a,
            handleMax: function () {
              var e;
              O(!0),
                o({
                  type: "CHANGE_AMOUNT",
                  payload: {
                    inputAmount:
                      null === (e = k.data) || void 0 === e
                        ? void 0
                        : e.toFixed(2),
                  },
                });
            },
            balance: k,
            onSubmit: M,
            formDispatch: o,
            isTrxPending: r,
          });
        },
        cl = function () {
          var e = Object(c.c)(),
            n = e.active,
            t = e.chainId,
            a = Object(i.useState)("deposit"),
            r = Object(W.a)(a, 2),
            o = r[0],
            s = r[1],
            d = va("https://service.apy.finance/v1/oracle").res,
            l = (function (e) {
              var n = Object(p.b)(
                  e
                    ? [
                        [L[e].dai.address, "paused"],
                        [L[e].dai.address, "addLiquidityLock"],
                        [L[e].dai.address, "redeemLock"],
                        [L[e].usdc.address, "paused"],
                        [L[e].usdc.address, "addLiquidityLock"],
                        [L[e].usdc.address, "redeemLock"],
                        [L[e].tether.address, "paused"],
                        [L[e].tether.address, "addLiquidityLock"],
                        [L[e].tether.address, "redeemLock"],
                      ]
                    : []
                ),
                t = n.data,
                a = n.error;
              return {
                res: Oa(
                  Object(i.useMemo)(
                    function () {
                      var e;
                      return t && (e = t.includes(!0)), e;
                    },
                    [t]
                  ),
                  a
                ),
              };
            })(t),
            u = l.res.data,
            b = Object(i.useReducer)(fd, {
              selectedToken: "dai",
              inputAmount: null,
              inputError: null,
              isTrxPending: !1,
            }),
            m = Object(W.a)(b, 2),
            j = m[0],
            h = m[1],
            f = Object(i.useReducer)(fd, {
              selectedToken: "dai",
              inputAmount: null,
              inputError: null,
              isTrxPending: !1,
            }),
            x = Object(W.a)(f, 2),
            y = x[0],
            g = x[1],
            O = function () {
              var e;
              return (
                !n ||
                (null === (e = d.data) || void 0 === e ? void 0 : e.locked) ||
                u
              );
            };
          return Object(Be.jsxs)(wd, {
            tabs: ["deposit", "withdraw"],
            activeTab: o,
            onTabClick: function (e) {
              e !== o && s(e);
            },
            isDisabled: O(),
            style: { alignSelf: "start" },
            children: [
              "deposit" === o
                ? Object(Be.jsx)(rl, {
                    selectedToken: j.selectedToken,
                    inputAmount: j.inputAmount,
                    inputError: j.inputError,
                    isTrxPending: j.isTrxPending,
                    formDispatch: h,
                  })
                : Object(Be.jsx)(sl, {
                    selectedToken: y.selectedToken,
                    inputAmount: y.inputAmount,
                    inputError: y.inputError,
                    isTrxPending: y.isTrxPending,
                    formDispatch: g,
                  }),
              O() &&
                (function () {
                  var e, t;
                  return (
                    n
                      ? null !== (e = d.data) && void 0 !== e && e.locked
                        ? (t =
                            "TVL is being validated. Forms will be reactivated shortly.")
                        : u &&
                          (t =
                            "Platform is undergoing maintenance. Forms will be reactivated shortly.")
                      : (t = Object(Be.jsxs)(Be.Fragment, {
                          children: [
                            "Connect your wallet in order to deposit or withdraw your stablecoins.",
                            Object(Be.jsx)(Zn, {}),
                          ],
                        })),
                    Object(Be.jsx)(Xc, { children: t })
                  );
                })(),
            ],
          });
        };
      var dl,
        ll,
        ul,
        pl,
        bl,
        ml,
        jl,
        hl,
        fl,
        xl = l.d.div(
          ol ||
            (ol = Object(ce.a)([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: grid;\n  place-items: center;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(7px);\n  z-index: 4;\n",
            ]))
        ),
        yl = function (e) {
          var n = e.isOpen,
            t = e.close,
            i = e.children;
          return o.a.createPortal(
            n &&
              Object(Be.jsx)(xl, {
                onClick: t,
                children: Object(Be.jsx)("div", {
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                  children: i,
                }),
              }),
            document.querySelector("#modal")
          );
        },
        gl = function () {
          var e = Vn("confirm"),
            n = e.isOpen,
            t = e.setIsOpen,
            i = e.payload;
          return Object(Be.jsx)(yl, {
            isOpen: n,
            close: function () {
              return t(!1);
            },
            children: Object(Be.jsxs)(Ol, {
              as: cn,
              gap: 4,
              children: [
                Object(Be.jsx)(vl, {
                  children: null === i || void 0 === i ? void 0 : i.title,
                }),
                Object(Be.jsx)(wl, {
                  children: null === i || void 0 === i ? void 0 : i.content,
                }),
                (null === i || void 0 === i ? void 0 : i.onContinue) &&
                  Object(Be.jsx)(Un, {
                    isRound: !0,
                    isFullWidth: !0,
                    onClick: function () {
                      null === i || void 0 === i || i.onContinue(),
                        "deposit" ===
                          (null === i || void 0 === i ? void 0 : i.type) &&
                          t(!1);
                    },
                    children: "Continue",
                  }),
              ],
            }),
          });
        },
        Ol = Object(l.d)(Uc)(
          dl ||
            (dl = Object(ce.a)([
              "\n  background-color: ",
              ";\n  box-shadow: 0px 61px 66px rgba(43, 31, 79, 0.07);\n  border-radius: ",
              ";\n  width: 80%;\n  margin: 0 auto;\n  padding: 1.5rem;\n\n  @media (min-width: 501px) {\n    width: initial;\n    max-width: 375px;\n    margin: initial;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.whitePrimary;
          },
          function (e) {
            return e.theme.borderRadius;
          }
        ),
        vl = l.d.h2(
          ll ||
            (ll = Object(ce.a)([
              "\n  font-family: 'Aeonik Bold';\n  font-weight: 700;\n  font-size: ",
              ";\n  color: ",
              ";\n  text-align: center;\n",
            ])),
          function (e) {
            return e.theme.typeScale[5];
          },
          function (e) {
            return e.theme.colors.darkPrimary;
          }
        ),
        wl = l.d.div(
          ul ||
            (ul = Object(ce.a)([
              "\n  font-weight: 500;\n  font-size: ",
              ";\n  color: ",
              ";\n  text-align: center;\n",
            ])),
          function (e) {
            return e.theme.typeScale[2];
          },
          function (e) {
            return e.theme.colors.darkGray;
          }
        ),
        kl = t.p + "static/media/curve-glass-3.b775ee09.png",
        Al = function () {
          var e,
            n = va("https://cxd-data-api-xsehdlynwa-ue.a.run.app/platform").res;
          return Object(Be.jsxs)(Cl, {
            children: [
              Object(Be.jsx)(Tl, { children: "Current APR" }),
              Object(Be.jsx)(Ml, {
                children: n.isLoading
                  ? Object(Be.jsx)(Se.BeatLoader, { size: 18, color: oe })
                  : He(null === (e = n.data) || void 0 === e ? void 0 : e.apr, {
                      format: "percent",
                      decimals: 1,
                    }),
              }),
            ],
          });
        },
        Cl = Object(l.d)(jn)(
          pl ||
            (pl = Object(ce.a)([
              "\n  background: url(",
              "),\n    linear-gradient(107.6deg, #1a202e 12.63%, #374055 62.04%);\n  background-repeat: no-repeat;\n  background-position: 100% 100%;\n  border-radius: ",
              ";\n  padding: ",
              ";\n  font-size: 36px;\n  color: ",
              ";\n",
            ])),
          kl,
          function (e) {
            return e.theme.borderRadius;
          },
          function (e) {
            return e.theme.space[5];
          },
          function (e) {
            return e.theme.colors.background;
          }
        ),
        Tl = l.d.div(
          bl ||
            (bl = Object(ce.a)([
              "\n  font-family: 'Aeonik Regular';\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.5;\n\n  @media (min-width: 501px) {\n    font-size: 24px;\n  }\n",
            ]))
        ),
        Ml = l.d.div(
          ml ||
            (ml = Object(ce.a)([
              "\n  font-family: 'Aeonik Bold';\n  font-size: 30px;\n  font-weight: 700;\n  color: ",
              ";\n\n  @media (min-width: 501px) {\n    font-size: 42px;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.hoverPrimary;
          }
        ),
        El = Object(l.d)(hn)(
          jl ||
            (jl = Object(ce.a)([
              "\n  display: grid;\n  gap: 1rem;\n\n  @media (min-width: 891px) {\n    /* grid-template-columns: 5fr 3fr; */\n    grid-template-columns: 5fr auto;\n  }\n",
            ]))
        ),
        Rl = l.d.div(
          hl ||
            (hl = Object(ce.a)([
              "\n  align-self: start;\n  display: grid;\n  grid-template-rows: auto auto;\n  gap: 1rem;\n  min-width: 400px;\n",
            ]))
        ),
        Dl = function () {
          var e = Object(ve.a)("(min-width: 891px)");
          return Object(Be.jsxs)(El, {
            maxWidth: "1000px",
            children: [
              Object(Be.jsx)(gl, {}),
              !e &&
                Object(Be.jsxs)(Be.Fragment, {
                  children: [Object(Be.jsx)(sd, {}), Object(Be.jsx)(Al, {})],
                }),
              Object(Be.jsx)(cl, {}),
              e &&
                Object(Be.jsxs)(Rl, {
                  children: [Object(Be.jsx)(sd, {}), Object(Be.jsx)(Al, {})],
                }),
            ],
          });
        };
      function Ll(e) {
        var n = e.children,
          t = e.label,
          i = e.isLoading;
        return Object(Be.jsxs)(Sl, {
          children: [
            Object(Be.jsxs)("span", { children: [t, ":"] }),
            Object(Be.jsx)("span", {
              children: i
                ? Object(Be.jsx)(Se.BeatLoader, {
                    size: 16,
                    margin: 3,
                    color: se.colors.darkPrimary,
                  })
                : n,
            }),
          ],
        });
      }
      Ll.defaultProps = { isLoading: !1, checkPending: !1 };
      var Fl,
        zl,
        Sl = l.d.div(
          fl ||
            (fl = Object(ce.a)([
              "\n  display: flex;\n  flex-direction: column;\n\n  > span:first-child {\n    font-size: 14px;\n    font-weight: 800;\n    color: ",
              ";\n    text-transform: uppercase;\n  }\n\n  > span:last-child {\n    font-size: 1.4rem;\n    font-weight: 300;\n  }\n\n  ",
              "\n",
            ])),
          function (e) {
            return e.theme.colors.grey;
          },
          function (e) {
            var n = e.theme;
            return "\n      @media ".concat(
              n.breakpoints.tablet,
              " {\n        display: block;\n\n        > span:first-child {\n          margin-right: 0.5rem;\n          font-size: 15px;\n        }\n\n        > span:last-child {\n          font-size: 1.7rem;\n        }\n      }\n    "
            );
          }
        );
      var Bl,
        Pl = l.d.div(
          Fl ||
            (Fl = Object(ce.a)([
              "\n  font-size: ",
              ";\n  color: ",
              ";\n  text-align: center;\n",
            ])),
          function (e) {
            return e.theme.typeScale[1];
          },
          function (e) {
            return e.theme.colors.darkGray;
          }
        ),
        Il = Object(l.d)(Uc)(
          zl ||
            (zl = Object(ce.a)([
              "\n  background-color: ",
              ";\n  border: 1px solid ",
              ";\n  border-radius: ",
              ";\n  width: 300px;\n\n  ",
              "\n",
            ])),
          function (e) {
            return e.theme.colors.whitePrimary;
          },
          function (e) {
            return e.theme.colors.darkGray;
          },
          function (e) {
            return e.theme.borderRadius;
          },
          function (e) {
            var n = e.theme;
            return "\n      @media ".concat(
              n.breakpoints.tablet,
              " {\n        width: 350px;\n      }\n    "
            );
          }
        ),
        Vl = function () {
          var e = Vn("confirm"),
            n = e.isOpen,
            t = e.setIsOpen,
            i = e.payload,
            a = Object(ve.a)("(min-width: 501px)");
          return Object(Be.jsx)(yl, {
            isOpen: n,
            close: function () {
              return t(!1);
            },
            children: Object(Be.jsxs)(Il, {
              as: cn,
              padding: 5,
              gap: 5,
              children: [
                Object(Be.jsx)("h2", { children: "Confirm Lock Details" }),
                Object(Be.jsxs)(cn, {
                  gap: a ? 2 : 4,
                  children: [
                    ("create" ===
                      (null === i || void 0 === i ? void 0 : i.type) ||
                      "increase" ===
                        (null === i || void 0 === i ? void 0 : i.type)) &&
                      Object(Be.jsx)(Ll, {
                        label:
                          "increase" ===
                          (null === i || void 0 === i ? void 0 : i.type)
                            ? "Total"
                            : "Amount",
                        children: (function (e) {
                          if (e) {
                            if ("create" === e.type)
                              return He(e.lockAmount, { units: "CXD" });
                            if ("increase" === e.type) {
                              var n = Ie(e.currentLock.amount);
                              return He(n.plus(e.lockAmount), { units: "CXD" });
                            }
                          }
                        })(i),
                      }),
                    ("create" ===
                      (null === i || void 0 === i ? void 0 : i.type) ||
                      "extend" ===
                        (null === i || void 0 === i ? void 0 : i.type)) &&
                      Object(Be.jsx)(Ll, {
                        label: "Unlocks On",
                        children: Ue(
                          null === i || void 0 === i ? void 0 : i.unlockDate
                        ),
                      }),
                    ("create" ===
                      (null === i || void 0 === i ? void 0 : i.type) ||
                      "extend" ===
                        (null === i || void 0 === i ? void 0 : i.type)) &&
                      Object(Be.jsxs)(Ll, {
                        label: "Approx",
                        children: [
                          Ye(
                            null === i || void 0 === i ? void 0 : i.unlockDate
                          ),
                          " weeks",
                        ],
                      }),
                  ],
                }),
                Object(Be.jsxs)(cn, {
                  gap: 4,
                  children: [
                    Object(Be.jsx)(mn, {
                      children: Object(Be.jsx)(Un, {
                        isRound: !0,
                        isFullWidth: !0,
                        size: "small",
                        onClick: function () {
                          null === i || void 0 === i || i.onConfirm(), t(!1);
                        },
                        children: "Continue",
                      }),
                    }),
                    Object(Be.jsx)(Pl, {
                      children:
                        "Once locked, you will NOT be able to reduce the amount or duration of your lock.",
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function Wl(e, n, t) {
        var a,
          r = (function (e) {
            var n = Object(i.useState)(),
              t = Object(W.a)(n, 2),
              a = t[0],
              r = t[1];
            return (
              Object(i.useEffect)(
                function () {
                  if (e) {
                    var n = !0;
                    return (
                      e
                        .getBlock()
                        .then(function (e) {
                          n && r(e.timestamp);
                        })
                        .catch(function (e) {
                          return console.error(e.message);
                        }),
                      function () {
                        return (n = !1);
                      }
                    );
                  }
                },
                [e]
              ),
              a
            );
          })(e),
          o = Object(p.b)(
            n && t
              ? [
                  null === (a = F[n]) || void 0 === a ? void 0 : a.address,
                  "locked",
                  t,
                ]
              : []
          ),
          s = o.data,
          c = o.error;
        return Object(i.useMemo)(
          function () {
            var e;
            if (r && s) {
              var n,
                t = s.amount,
                i = Le()(s.end.toString());
              null !== i && void 0 !== i && i.isZero()
                ? (n = !1)
                : i.lte(r)
                ? (n = !0)
                : i.gt(r) && (n = !1),
                (e = { amount: t, end: i, isExpired: n });
            }
            return { data: e, isLoading: !r && !e && !c };
          },
          [r, s, c]
        );
      }
      function Hl(e) {
        var n = e.value;
        return Object(Be.jsx)(Ul, { children: n });
      }
      var Nl,
        Ul = l.d.div(
          Bl ||
            (Bl = Object(ce.a)([
              "\n  font-family: 'Aeonik Bold';\n  font-size: 34px;\n  font-weight: 700;\n  color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.colors.font;
          }
        );
      function Xl() {
        var e = Object(c.c)(),
          n = e.active,
          t = e.chainId,
          a = e.library,
          r = Object(i.useState)(),
          o = Object(W.a)(r, 2),
          s = o[0],
          l = o[1],
          u = Object(i.useState)(!1),
          p = Object(W.a)(u, 2),
          m = p[0],
          j = p[1],
          h = va(
            "https://api.coingecko.com/api/v3/simple/price?ids=lp-3pool-curve&vs_currencies=usd"
          ).res;
        Object(i.useEffect)(
          function () {
            var e = !0,
              n = (function () {
                var n = Object(Me.a)(
                  Re.a.mark(function n() {
                    var i, r, o;
                    return Re.a.wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (t && a) {
                                n.next = 2;
                                break;
                              }
                              return n.abrupt("return");
                            case 2:
                              return (
                                (i = a.getSigner()),
                                (r = new d.a.Contract(
                                  z[t].address,
                                  z[t].abi,
                                  i
                                )),
                                (n.prev = 4),
                                (n.next = 7),
                                r.callStatic["claim()"]()
                              );
                            case 7:
                              (o = n.sent), e && l(Ie(o)), (n.next = 15);
                              break;
                            case 11:
                              (n.prev = 11),
                                (n.t0 = n.catch(4)),
                                console.error(n.t0.message),
                                e && l(Le()(0));
                            case 15:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[4, 11]]
                    );
                  })
                );
                return function () {
                  return n.apply(this, arguments);
                };
              })();
            return (
              n(t, a),
              function () {
                return (e = !1);
              }
            );
          },
          [t, a]
        );
        var f = (function () {
          var e = Object(Me.a)(
            Re.a.mark(function e() {
              var n, i, r, o;
              return Re.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t && a && !s.isLessThanOrEqualTo(0)) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          j(!0),
                          (n = a.getSigner()),
                          (i = new d.a.Contract(z[t].address, z[t].abi, n)),
                          (e.next = 7),
                          i.callStatic["claim()"]().catch(function (e) {
                            return console.error(e.message);
                          })
                        );
                      case 7:
                        return (
                          (r = e.sent),
                          (o = i.functions["claim()"]().then(function (e) {
                            e.wait();
                          })),
                          (e.prev = 9),
                          (e.next = 12),
                          b.b.promise(
                            o,
                            {
                              loading:
                                "Confirm transaction through your wallet",
                              success: "Claim was successful!",
                              error: function (e) {
                                return e.message;
                              },
                            },
                            { success: { duration: 1e4 } }
                          )
                        );
                      case 12:
                        l(s.minus(Ie(r))), (e.next = 18);
                        break;
                      case 15:
                        (e.prev = 15),
                          (e.t0 = e.catch(9)),
                          console.error(e.t0.message);
                      case 18:
                        return (e.prev = 18), j(!1), e.finish(18);
                      case 21:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[9, 15, 18, 21]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
        return Object(Be.jsx)(Uc, {
          as: un,
          children: Object(Be.jsx)(Gc, {
            isWalletActive: n,
            label: "Fees Earned",
            icon: Object(Be.jsx)(hi, {
              src: ja,
              alt: "threeCrv-icon",
              size: 34,
              style: { marginRight: "0.5rem" },
            }),
            primary: Object(Be.jsx)(Hl, { value: He(s, { units: "3CRV" }) }),
            secondary: Object(Be.jsx)(Be.Fragment, {
              children: "Value: ".concat(
                (function (e, n) {
                  var t;
                  if (e && n.data) {
                    var i = n.data["lp-3pool-curve"].usd;
                    t = e.times(i);
                  }
                  return t ? "$".concat(He(t)) : We;
                })(s, h)
              ),
            }),
            button: Object(Be.jsx)(Gl, {
              disabled:
                !s || (null === s || void 0 === s ? void 0 : s.isZero()) || m,
              isLoading: m,
              onClick: f,
              variant: "outlined",
              isRound: !0,
              size: "small",
              children: "Claim",
            }),
          }),
        });
      }
      var Gl = Object(l.d)(Un)(
        Nl ||
          (Nl = Object(ce.a)([
            "\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: ",
            ";\n",
          ])),
        function (e) {
          return e.theme.colors.font;
        }
      );
      function Zl() {
        return Object(Be.jsx)(Hl, { value: "1.0x" });
      }
      var Yl,
        ql,
        Jl = function () {
          var e,
            n,
            t,
            i,
            a = Object(c.c)(),
            r = a.active,
            o = a.library,
            s = a.chainId,
            d = a.account,
            l = va(
              "https://api.coingecko.com/api/v3/simple/price?ids=cortexdao&vs_currencies=usd"
            ).res,
            u = Wl(o, s, d),
            p = Object(ve.a)("(min-width: 501px)"),
            b = Object(ve.a)("(min-width: 1201px)");
          return Object(Be.jsxs)(ln, {
            columns: b ? 4 : p ? 2 : 1,
            children: [
              Object(Be.jsx)(Uc, {
                as: un,
                children: Object(Be.jsx)(Gc, {
                  isWalletActive: r,
                  isLoading: u.isLoading,
                  label: "Locked",
                  icon: Object(Be.jsx)(hi, {
                    src: Fi,
                    alt: "cxd-icon",
                    size: 34,
                    style: { marginRight: "0.5rem" },
                  }),
                  primary: Object(Be.jsx)(Hl, {
                    value: He(
                      Ie(
                        null === (e = u.data) || void 0 === e
                          ? void 0
                          : e.amount
                      ),
                      { units: "CXD" }
                    ),
                  }),
                  secondary: Object(Be.jsx)(Be.Fragment, {
                    children: "Value: ".concat(
                      (function (e, n) {
                        var t;
                        if (e.data && n.data) {
                          var i = Ie(e.data.amount),
                            a = n.data.cortexdao.usd;
                          t = i.times(a);
                        }
                        return t ? "$".concat(He(t)) : We;
                      })(u, l)
                    ),
                  }),
                }),
              }),
              Object(Be.jsx)(Uc, {
                as: un,
                children: Object(Be.jsx)(Gc, {
                  isWalletActive: r,
                  isLoading: u.isLoading,
                  label: "Locked For",
                  primary: Object(Be.jsx)(Hl, {
                    value:
                      null !== (n = u.data) && void 0 !== n && n.end.gt(0)
                        ? "".concat(
                            He(qe(u.data.end), { decimals: 0 }),
                            " days"
                          )
                        : We,
                  }),
                  secondary: Object(Be.jsx)(Be.Fragment, {
                    children: "Date: ".concat(
                      null !== (t = u.data) &&
                        void 0 !== t &&
                        null !== (i = t.end) &&
                        void 0 !== i &&
                        i.gt(0)
                        ? Ue(u.data.end)
                        : We
                    ),
                  }),
                }),
              }),
              Object(Be.jsx)(Xl, {}),
              Object(Be.jsxs)(Uc, {
                as: un,
                children: [
                  Object(Be.jsx)(Gc, {
                    isWalletActive: r,
                    label: "Your Boost",
                    icon: Object(Be.jsx)(hi, {
                      src: Fi,
                      alt: "cxd-icon",
                      size: 34,
                      style: { marginRight: "0.5rem" },
                    }),
                    primary: Object(Be.jsx)(Zl, {}),
                  }),
                  r &&
                    Object(Be.jsx)(Xc, {
                      fontSz: 14,
                      padding: 4,
                      children:
                        "Boosted CXD rewards are pending rewards schedule proposal",
                    }),
                ],
              }),
            ],
          });
        };
      function Kl(e, n) {
        var t = n.type,
          i = n.payload;
        switch (t) {
          case "CHANGE_FORM":
            return Object(ke.a)(
              Object(ke.a)({}, e),
              {},
              {
                currentForm: i.currentForm,
                inputAmountError: null,
                unlockEpochError: null,
              }
            );
          case "CHANGE_AMOUNT":
            return Object(ke.a)(
              Object(ke.a)({}, e),
              {},
              { inputAmount: i.inputAmount, inputAmountError: null }
            );
          case "CHANGE_UNLOCK_EPOCH":
            return Object(ke.a)(
              Object(ke.a)({}, e),
              {},
              { unlockEpoch: i.unlockEpoch, unlockEpochError: null }
            );
          case "INPUT_AMOUNT_ERROR":
            return Object(ke.a)(
              Object(ke.a)({}, e),
              {},
              { inputAmountError: i.inputAmountError }
            );
          case "UNLOCK_EPOCH_ERROR":
            return Object(ke.a)(
              Object(ke.a)({}, e),
              {},
              { unlockEpochError: i.unlockEpochError }
            );
          case "START_TRX":
            return Object(ke.a)(Object(ke.a)({}, e), {}, { isTrxPending: !0 });
          case "END_TRX":
            return Object(ke.a)(
              Object(ke.a)({}, e),
              {},
              { isTrxPending: !1, inputAmount: null, unlockEpoch: null }
            );
          default:
            return e;
        }
      }
      function Ql(e) {
        var n,
          t,
          a = e.formState,
          r = e.formDispatch,
          o = e.inputAmount,
          s = Object(c.c)(),
          l = s.library,
          u = s.chainId,
          m = s.account,
          j = Object(i.useState)(!1),
          h = Object(W.a)(j, 2),
          f = h[0],
          x = h[1],
          y = null === (n = F[u]) || void 0 === n ? void 0 : n.address,
          g = Object(p.b)([D[u].cxd.address, "balanceOf", m]).data,
          O = Object(p.b)([
            null === (t = D[u]) || void 0 === t ? void 0 : t.cxd.address,
            "allowance",
            m,
            y,
          ]),
          v = O.data,
          w = O.mutate;
        Object(i.useEffect)(
          function () {
            if (v) {
              var e = Ie(v),
                n = o || "0",
                t = !e.isZero() && e.gte(n);
              x(t);
            }
          },
          [v, o]
        );
        var k = (function () {
          var e = Object(Me.a)(
            Re.a.mark(function e(n, t, i, a) {
              var o, s, c, l;
              return Re.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!n && t && i && a) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          r({ type: "START_TRX" }),
                          (o = t.getSigner()),
                          (s = new d.a.Contract(
                            D[i].cxd.address,
                            D[i].cxd.abi,
                            o
                          )),
                          (c = Pe(Number.MAX_SAFE_INTEGER)),
                          (e.prev = 6),
                          (e.next = 9),
                          b.b.promise(
                            s.approve(a, c),
                            {
                              loading:
                                "Confirm transaction through your wallet",
                              success: "Transaction was successful!",
                              error: function (e) {
                                return e.message;
                              },
                            },
                            { success: { duration: 1e4 } }
                          )
                        );
                      case 9:
                        return (l = e.sent), (e.next = 12), l.wait();
                      case 12:
                        w(void 0, !0), (e.next = 18);
                        break;
                      case 15:
                        (e.prev = 15),
                          (e.t0 = e.catch(6)),
                          console.error(e.t0.message);
                      case 18:
                        r({ type: "END_TRX" });
                      case 19:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[6, 15]]
              );
            })
          );
          return function (n, t, i, a) {
            return e.apply(this, arguments);
          };
        })();
        return v && !f
          ? Object(Be.jsx)(Ad, {
              disabled: null === a || void 0 === a ? void 0 : a.isTrxPending,
              isLoading: null === a || void 0 === a ? void 0 : a.isTrxPending,
              action: "approve",
              onClick: function () {
                return k(f, l, u, y);
              },
            })
          : Object(Be.jsx)(Ad, {
              disabled: null === a || void 0 === a ? void 0 : a.isTrxPending,
              action: "max",
              onClick: function () {
                return (function (e) {
                  var n = e ? Ie(e).toString() : "0";
                  r({ type: "CHANGE_AMOUNT", payload: { inputAmount: n } });
                })(g);
              },
            });
      }
      function _l(e) {
        var n = e.isDisabled;
        return Object(Be.jsxs)("svg", {
          width: "21",
          height: "20",
          viewBox: "0 0 21 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            Object(Be.jsx)("path", {
              d: "M16.3333 3.33325H4.66667C3.74619 3.33325 3 4.07944 3 4.99992V16.6666C3 17.5871 3.74619 18.3333 4.66667 18.3333H16.3333C17.2538 18.3333 18 17.5871 18 16.6666V4.99992C18 4.07944 17.2538 3.33325 16.3333 3.33325Z",
              stroke: n ? ae : te,
              strokeWidth: "1.66667",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            Object(Be.jsx)("path", {
              d: "M13.8335 1.66675V5.00008",
              stroke: n ? ae : te,
              strokeWidth: "1.66667",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            Object(Be.jsx)("path", {
              d: "M7.1665 1.66675V5.00008",
              stroke: n ? ae : te,
              strokeWidth: "1.66667",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            Object(Be.jsx)("path", {
              d: "M3 8.33325H18",
              stroke: n ? ae : te,
              strokeWidth: "1.66667",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        });
      }
      function $l(e) {
        var n = e.isOpen,
          t = e.setIsOpen,
          i = e.selectedDate,
          a = e.shortcutButtons,
          r = e.children,
          o = e.isDisabled,
          s = e.error,
          c = function (e) {
            return e ? Ue(e) : "Select a date";
          };
        return Object(Be.jsxs)(cn, {
          gap: 5,
          children: [
            Object(Be.jsxs)(cn, {
              gap: 2,
              children: [
                s && Object(Be.jsx)(tu, { children: s }),
                Object(Be.jsxs)(mn, {
                  justify: "spaceBetween",
                  align: "center",
                  children: [
                    Object(Be.jsx)("h2", { children: "Lock until" }),
                    Object(Be.jsx)(xn, {
                      disabled: o,
                      isOpen: n,
                      setIsOpen: t,
                      toggle: function (e) {
                        return Object(Be.jsxs)(
                          nu,
                          Object(ke.a)(
                            Object(ke.a)({}, e),
                            {},
                            {
                              children: [
                                Object(Be.jsx)(_l, { isDisabled: o }),
                                c(i),
                              ],
                            }
                          )
                        );
                      },
                      children: r,
                    }),
                  ],
                }),
              ],
            }),
            a,
          ],
        });
      }
      var eu,
        nu = l.d.button(
          Yl ||
            (Yl = Object(ce.a)([
              "\n  display: flex;\n  gap: 0.375rem;\n  border: none;\n  border-bottom: 1px solid ",
              ";\n  background-color: transparent;\n  font-size: ",
              ";\n  font-weight: 400;\n  text-align: center;\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgba(24, 169, 116, 0.1);\n  }\n\n  &:disabled {\n    color: ",
              ";\n    pointer-events: none;\n  }\n",
            ])),
          function (e) {
            return e.theme.colors.brightGray;
          },
          function (e) {
            return e.theme.typeScale[4];
          },
          function (e) {
            return e.theme.colors.brightGray;
          }
        ),
        tu = l.d.span(
          ql ||
            (ql = Object(ce.a)([
              "\n  font-size: 14px;\n  font-weight: 500;\n  color: ",
              ";\n  text-align: right;\n",
            ])),
          function (e) {
            return e.theme.colors.danger;
          }
        ),
        iu = t(75),
        au = {
          focusedDate: null,
          isDateFocused: function () {
            return !1;
          },
          isDateSelected: function () {
            return !1;
          },
          isDateHovered: function () {
            return !1;
          },
          isDateBlocked: function () {
            return !1;
          },
          isFirstOrLastSelectedDate: function () {
            return !1;
          },
          onDateFocus: function () {},
          onDateHover: function () {},
          onDateSelect: function () {},
        },
        ru = a.a.createContext(au),
        ou = t(134),
        su = t.p + "static/media/left-chevron.bb11af5f.svg",
        cu = t.p + "static/media/right-chevron.17a8da9a.svg";
      function du(e) {
        var n = e.dayLabel,
          t = e.date,
          a = Object(i.useRef)(null),
          r = Object(i.useContext)(ru),
          o = r.focusedDate,
          s = r.isDateFocused,
          c = r.isDateSelected,
          d = r.isDateHovered,
          l = r.isDateBlocked,
          u = r.isFirstOrLastSelectedDate,
          p = r.onDateSelect,
          b = r.onDateFocus,
          m = r.onDateHover,
          j = Object(iu.c)({
            date: t,
            focusedDate: o,
            isDateFocused: s,
            isDateSelected: c,
            isDateHovered: d,
            isDateBlocked: l,
            isFirstOrLastSelectedDate: u,
            onDateFocus: b,
            onDateSelect: p,
            onDateHover: m,
            dayRef: a,
          }),
          h = j.isSelected,
          f = j.isSelectedStartOrEnd,
          x = j.isWithinHoverRange,
          y = j.disabledDate,
          g = j.onClick,
          O = j.onKeyDown,
          v = j.onMouseEnter,
          w = j.tabIndex;
        if (!n) return Object(Be.jsx)("div", {});
        var k = (function (e, n, t, i) {
          return function (a) {
            var r = a.selectedFirstOrLastColor,
              o = a.normalColor,
              s = a.selectedColor,
              c = a.rangeHoverColor,
              d = a.disabledColor;
            return n ? r : e ? s : t ? c : i ? d : o;
          };
        })(h, f, x, y);
        return Object(Be.jsx)(mu, {
          disabled: y,
          onClick: g,
          onKeyDown: O,
          onMouseEnter: v,
          tabIndex: w,
          type: "button",
          ref: a,
          style: {
            color: k({
              selectedFirstOrLastColor: "#FFFFFF",
              disabledColor: ae,
            }),
            background: k({
              selectedFirstOrLastColor: ne,
              disabledColor: "#FFFFFF",
            }),
          },
          children: n,
        });
      }
      var lu,
        uu,
        pu,
        bu,
        mu = l.d.button(
          eu ||
            (eu = Object(ce.a)([
              "\n  border: 1px solid transparent;\n  border-radius: 50%;\n  background-color: #fff;\n  margin: 0.25rem;\n  padding: 0.25rem;\n  font-size: 12px;\n  font-weight: 500;\n  text-align: center;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",
              ";\n    color: #fff;\n  }\n\n  &:focus {\n    outline: 0;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n",
            ])),
          oe
        );
      function ju(e) {
        var n = e.year,
          t = e.month,
          i = e.firstDayOfWeek,
          a = e.goBack,
          r = e.goForward,
          o = Object(iu.d)({
            year: n,
            month: t,
            firstDayOfWeek: i,
            weekdayLabelFormat: function (e) {
              return Object(ou.a)(e, "EEEEE");
            },
            dayLabelFormat: function (e) {
              return Object(ou.a)(e, "d");
            },
          }),
          s = o.monthLabel,
          c = o.weekdayLabels,
          d = o.days;
        return Object(Be.jsxs)(hu, {
          gap: 5,
          children: [
            Object(Be.jsxs)(mn, {
              justify: "spaceBetween",
              align: "center",
              children: [
                s,
                Object(Be.jsxs)(fu, {
                  gap: 5,
                  children: [
                    Object(Be.jsx)(Un, {
                      variant: "icon",
                      onClick: a,
                      children: Object(Be.jsx)("img", {
                        src: su,
                        alt: "left-arrow",
                      }),
                    }),
                    Object(Be.jsx)(Un, {
                      variant: "icon",
                      onClick: r,
                      children: Object(Be.jsx)("img", {
                        src: cu,
                        alt: "right-arrow",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            Object(Be.jsxs)(cn, {
              gap: 3,
              children: [
                Object(Be.jsx)(xu, {
                  children: c.map(function (e, n) {
                    return Object(Be.jsx)(
                      "span",
                      {
                        style: {
                          textAlign: "center",
                          fontSize: 12,
                          fontWeight: 500,
                          color: ie,
                        },
                        children: e,
                      },
                      "".concat(e).concat(n)
                    );
                  }),
                }),
                Object(Be.jsx)(yu, {
                  children: d.map(function (e, n) {
                    return "object" === typeof e
                      ? Object(Be.jsx)(
                          du,
                          { date: e.date, dayLabel: e.dayLabel },
                          e.date.toString()
                        )
                      : Object(Be.jsx)("div", {}, n);
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var hu = Object(l.d)(cn)(
          lu ||
            (lu = Object(ce.a)([
              "\n  position: absolute;\n  top: ",
              ";\n  left: -50%;\n  background-color: ",
              ";\n  border: 1px solid ",
              ";\n  border-radius: 10px;\n  box-shadow: 0px 4px 12px rgba(43, 31, 79, 0.07);\n  width: 275px;\n  padding: 1.5rem;\n",
            ])),
          function (e) {
            var n = e.theme,
              t = e.top;
            return null !== t && void 0 !== t ? t : n.space[6];
          },
          function (e) {
            return e.theme.colors.whitePrimary;
          },
          function (e) {
            return e.theme.colors.brightGray;
          }
        ),
        fu = l.d.div(
          uu ||
            (uu = Object(ce.a)([
              "\n  display: flex;\n  & > :not(:last-child) {\n    margin-right: ",
              ";\n  }\n",
            ])),
          function (e) {
            var n,
              t = e.theme,
              i = e.gap;
            return null !== (n = t.space[i]) && void 0 !== n ? n : "1rem";
          }
        ),
        xu = l.d.div(
          pu ||
            (pu = Object(ce.a)([
              "\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-content: center;\n",
            ]))
        ),
        yu = l.d.div(
          bu ||
            (bu = Object(ce.a)([
              "\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  justify-content: center;\n",
            ]))
        );
      function gu(e) {
        var n = e.currentLockEnd,
          t = e.currentDate,
          a = e.onChange,
          r = e.minDate,
          o = e.maxDate,
          s = Object(i.useState)({ endDate: t, focusedInput: iu.a }),
          c = Object(W.a)(s, 2),
          d = c[0],
          l = c[1],
          u = Object(iu.b)({
            endDate: d.endDate,
            focusedInput: d.focusedInput,
            numberOfMonths: 1,
            exactMinBookingDays: !0,
            firstDayOfWeek: 0,
            initialVisibleMonth: d.endDate
              ? d.endDate
              : null !== n && void 0 !== n && n.gt(0)
              ? r
              : new Date(),
            minBookingDate: r,
            maxBookingDate: o,
            onDatesChange: function (e) {
              var n = e.endDate.setHours((-1 * R) / 60) / 1e3,
                t = Ge(n),
                i = Xe(t);
              l(
                Object(ke.a)(
                  Object(ke.a)({}, e),
                  {},
                  { endDate: i, focusedInput: iu.a }
                )
              ),
                a(t);
            },
          }),
          p = u.firstDayOfWeek,
          b = u.activeMonths,
          m = u.isDateSelected,
          j = u.isDateHovered,
          h = u.isFirstOrLastSelectedDate,
          f = u.isDateBlocked,
          x = u.isDateFocused,
          y = u.focusedDate,
          g = u.onDateHover,
          O = u.onDateSelect,
          v = u.onDateFocus,
          w = u.goToPreviousMonths,
          k = u.goToNextMonths;
        return Object(Be.jsx)(ru.Provider, {
          value: {
            focusedDate: y,
            isDateFocused: x,
            isDateSelected: m,
            isDateHovered: j,
            isDateBlocked: f,
            isFirstOrLastSelectedDate: h,
            onDateSelect: O,
            onDateFocus: v,
            onDateHover: g,
          },
          children: Object(Be.jsx)(ju, {
            year: b[0].year,
            month: b[0].month,
            firstDayOfWeek: p,
            goBack: w,
            goForward: k,
          }),
        });
      }
      var Ou,
        vu,
        wu,
        ku = function (e) {
          var n,
            t = e.formState,
            i = e.formDispatch,
            a = Object(c.c)(),
            r = a.active,
            o = a.library,
            s = a.chainId,
            l = a.account,
            u = Vn("confirm"),
            m = u.setIsOpen,
            j = u.setPayload,
            h = null === (n = F[s]) || void 0 === n ? void 0 : n.address,
            f = kd(s, l, t.inputAmount, h, "cxd"),
            x = Object(W.a)(f, 1)[0],
            y = Qc(s, l, "cxd"),
            g = Object(W.a)(y, 2),
            O = g[0],
            v = g[1],
            w = Object(p.b)([F[s].address, "locked", l]).mutate,
            k = (function () {
              var e = Object(Me.a)(
                Re.a.mark(function e(n) {
                  var a, r, c, l, u, p, h;
                  return Re.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((n.preventDefault(), o && s)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          if (
                            !((r = t.inputAmount ? t.inputAmount : "0") <= 0)
                          ) {
                            e.next = 9;
                            break;
                          }
                          return (
                            i({
                              type: "INPUT_AMOUNT_ERROR",
                              payload: { inputAmountError: "Enter an amount." },
                            }),
                            e.abrupt("return")
                          );
                        case 9:
                          if (
                            null === (a = O.data) ||
                            void 0 === a ||
                            !a.lt(r)
                          ) {
                            e.next = 14;
                            break;
                          }
                          return (
                            i({
                              type: "INPUT_AMOUNT_ERROR",
                              payload: {
                                inputAmountError: "You don't have enough CXD.",
                              },
                            }),
                            e.abrupt("return")
                          );
                        case 14:
                          if (t.unlockEpoch) {
                            e.next = 17;
                            break;
                          }
                          return (
                            i({
                              type: "UNLOCK_EPOCH_ERROR",
                              payload: {
                                unlockEpochError: "Choose a date below.",
                              },
                            }),
                            e.abrupt("return")
                          );
                        case 17:
                          (c = o.getSigner()),
                            (l = F[s].address),
                            (u = F[s].abi),
                            (p = new d.a.Contract(l, u, c)),
                            (h = (function () {
                              var e = Object(Me.a)(
                                Re.a.mark(function e() {
                                  var n, a;
                                  return Re.a.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              i({ type: "START_TRX" }),
                                              (n = Pe(t.inputAmount)),
                                              (a = p
                                                .create_lock(n, t.unlockEpoch)
                                                .then(function (e) {
                                                  return e.wait();
                                                })),
                                              (e.prev = 3),
                                              (e.next = 6),
                                              b.b.promise(
                                                a,
                                                {
                                                  loading:
                                                    "Confirm transaction through your wallet",
                                                  success:
                                                    "Transaction was successful!",
                                                  error: function (e) {
                                                    return e.message;
                                                  },
                                                },
                                                { success: { duration: 1e4 } }
                                              )
                                            );
                                          case 6:
                                            v(void 0, !0),
                                              w(void 0, !0),
                                              (e.next = 13);
                                            break;
                                          case 10:
                                            (e.prev = 10),
                                              (e.t0 = e.catch(3)),
                                              console.error(e.t0.message);
                                          case 13:
                                            return (
                                              (e.prev = 13),
                                              i({ type: "END_TRX" }),
                                              e.finish(13)
                                            );
                                          case 16:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [[3, 10, 13, 16]]
                                  );
                                })
                              );
                              return function () {
                                return e.apply(this, arguments);
                              };
                            })()),
                            m(!0),
                            j({
                              type: "create",
                              lockAmount: t.inputAmount,
                              unlockDate: t.unlockEpoch,
                              onConfirm: h,
                            });
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(Be.jsx)(Un, {
            disabled: !r || !x || t.isTrxPending,
            isLoading: x && t.isTrxPending,
            onClick: k,
            isFullWidth: !0,
            isRound: !0,
            children: "Lock CXD",
          });
        };
      function Au(e) {
        var n = e.formState,
          t = e.formDispatch,
          a = Object(c.c)(),
          r = a.chainId,
          o = a.account,
          s = a.active,
          d = Object(i.useState)(!1),
          l = Object(W.a)(d, 2),
          u = l[0],
          p = l[1],
          b = Qc(r, o, "cxd"),
          m = Object(W.a)(b, 1)[0],
          j = function (e) {
            e !== n.unlockEpoch &&
              (t({ type: "CHANGE_UNLOCK_EPOCH", payload: { unlockEpoch: e } }),
              p(!1));
          },
          h = ze()().unix(),
          f = Xe(Ge(B + h)),
          x = Xe(Ge(125798400 + h)),
          y = Object(ve.a)("(min-width: 701px)");
        return Object(Be.jsxs)(cn, {
          as: "form",
          gap: 6,
          onSubmit: function (e) {
            return e.preventDefault();
          },
          children: [
            Object(Be.jsx)(zd, {
              isDisabled: n.isTrxPending,
              isWalletActive: s,
              label: "Lock CortexDAO tokens",
              tokenSelect: function (e) {
                return Object(Be.jsx)(
                  hi,
                  Object(ke.a)({ size: 32, src: Fi, alt: "cxd-icon" }, e)
                );
              },
              value: n.inputAmount,
              onChange: function (e) {
                return t({
                  type: "CHANGE_AMOUNT",
                  payload: { inputAmount: e },
                });
              },
              inputButton: Object(Be.jsx)(Ql, {
                formState: n,
                formDispatch: t,
                inputAmount: n.inputAmount,
              }),
              balance: m,
              error: n.inputAmountError,
            }),
            Object(Be.jsx)($l, {
              isDisabled: n.isTrxPending,
              isOpen: u,
              setIsOpen: p,
              selectedDate: n.unlockEpoch,
              shortcutButtons: Object(Be.jsx)(Mu, {
                columns: y ? 8 : 4,
                children: I.map(function (e) {
                  var t = e.label,
                    i = e.addtlSecs;
                  return Object(Be.jsx)(
                    Eu,
                    {
                      disabled: n.isTrxPending,
                      type: "button",
                      onClick: function () {
                        return j(Je(i));
                      },
                      children: t,
                    },
                    t
                  );
                }),
              }),
              error: n.unlockEpochError,
              children: Object(Be.jsx)(gu, {
                currentDate: n.unlockEpoch ? Xe(n.unlockEpoch) : null,
                onChange: j,
                minDate: f,
                maxDate: x,
              }),
            }),
            Object(Be.jsxs)(cn, {
              gap: 3,
              children: [
                s
                  ? Object(Be.jsx)(ku, { formState: n, formDispatch: t })
                  : Object(Be.jsx)(Un, {
                      disabled: !0,
                      isFullWidth: !0,
                      isRound: !0,
                      children: "Lock CXD",
                    }),
                Object(Be.jsx)(Tu, {
                  children:
                    "Once locked, you will NOT be able to reduce the amount or duration of your lock.",
                }),
              ],
            }),
          ],
        });
      }
      var Cu,
        Tu = l.d.div(
          Ou ||
            (Ou = Object(ce.a)([
              "\n  font-size: ",
              ";\n  color: ",
              ";\n  text-align: center;\n",
            ])),
          function (e) {
            return e.theme.typeScale[1];
          },
          function (e) {
            return e.theme.colors.darkGray;
          }
        ),
        Mu = l.d.div(
          vu ||
            (vu = Object(ce.a)([
              "\n  --columns: ",
              ";\n  /* border: 1px solid green; */\n  display: grid;\n  grid-template-columns: repeat(var(--columns), 1fr);\n  gap: 1rem;\n",
            ])),
          function (e) {
            var n = e.columns;
            return void 0 === n ? 8 : n;
          }
        ),
        Eu = l.d.button(
          wu || (wu = Object(ce.a)(["\n  /* width: 60px; */\n"]))
        ),
        Ru = function (e) {
          var n,
            t = e.formState,
            i = e.formDispatch,
            a = Object(c.c)(),
            r = a.active,
            o = a.library,
            s = a.chainId,
            l = a.account,
            u = Vn("confirm"),
            m = u.setIsOpen,
            j = u.setPayload,
            h = null === (n = F[s]) || void 0 === n ? void 0 : n.address,
            f = kd(s, l, t.inputAmount, h, "cxd"),
            x = Object(W.a)(f, 1)[0],
            y = Qc(s, l, "cxd"),
            g = Object(W.a)(y, 2),
            O = g[0],
            v = g[1],
            w = Object(p.b)([F[s].address, "locked", l]),
            k = w.data,
            A = w.mutate,
            C = Object(p.b)(
              s && l ? [F[s].address, "balanceOf(address)", l] : []
            ).mutate,
            T = (function () {
              var e = Object(Me.a)(
                Re.a.mark(function e(n) {
                  var a, r, c, l, u, p, h;
                  return Re.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((n.preventDefault(), o && s)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          if (
                            !((r = t.inputAmount ? t.inputAmount : "0") <= 0)
                          ) {
                            e.next = 9;
                            break;
                          }
                          return (
                            i({
                              type: "INPUT_AMOUNT_ERROR",
                              payload: { inputAmountError: "Enter an amount." },
                            }),
                            e.abrupt("return")
                          );
                        case 9:
                          if (
                            null === (a = O.data) ||
                            void 0 === a ||
                            !a.lt(r)
                          ) {
                            e.next = 12;
                            break;
                          }
                          return (
                            i({
                              type: "INPUT_AMOUNT_ERROR",
                              payload: {
                                inputAmountError: "You don't have enough CXD.",
                              },
                            }),
                            e.abrupt("return")
                          );
                        case 12:
                          (c = o.getSigner()),
                            (l = F[s].address),
                            (u = F[s].abi),
                            (p = new d.a.Contract(l, u, c)),
                            (h = (function () {
                              var e = Object(Me.a)(
                                Re.a.mark(function e() {
                                  var n, a;
                                  return Re.a.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              i({ type: "START_TRX" }),
                                              (n = Pe(t.inputAmount)),
                                              (e.prev = 2),
                                              (e.next = 5),
                                              b.b.promise(
                                                p.increase_amount(n),
                                                {
                                                  loading:
                                                    "Confirm transaction through your wallet",
                                                  success:
                                                    "Transaction was successful!",
                                                  error: function (e) {
                                                    return e.message;
                                                  },
                                                },
                                                { success: { duration: 1e4 } }
                                              )
                                            );
                                          case 5:
                                            return (
                                              (a = e.sent),
                                              (e.next = 8),
                                              a.wait()
                                            );
                                          case 8:
                                            v(void 0, !0),
                                              A(void 0, !0),
                                              C(void 0, !0),
                                              (e.next = 16);
                                            break;
                                          case 13:
                                            (e.prev = 13),
                                              (e.t0 = e.catch(2)),
                                              console.error(e.t0.message);
                                          case 16:
                                            return (
                                              (e.prev = 16),
                                              i({ type: "END_TRX" }),
                                              e.finish(16)
                                            );
                                          case 19:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [[2, 13, 16, 19]]
                                  );
                                })
                              );
                              return function () {
                                return e.apply(this, arguments);
                              };
                            })()),
                            m(!0),
                            j({
                              type: "increase",
                              lockAmount: t.inputAmount,
                              currentLock: k,
                              onConfirm: h,
                            });
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(Be.jsx)(Un, {
            disabled: !r || !x || t.isTrxPending,
            isLoading: x && "increase" === t.currentForm && t.isTrxPending,
            onClick: T,
            isFullWidth: !0,
            isRound: !0,
            children: "Add CXD",
          });
        };
      function Du(e) {
        var n = e.formState,
          t = e.formDispatch,
          i = Object(c.c)(),
          a = i.active,
          r = i.chainId,
          o = i.account,
          s = Object(p.b)(
            r && o ? [F[r].address, "balanceOf(address)", o] : []
          ).data,
          d = Qc(r, o, "cxd"),
          l = Object(W.a)(d, 1)[0];
        return Object(Be.jsxs)(cn, {
          as: "form",
          gap: 6,
          onSubmit: function (e) {
            return e.preventDefault();
          },
          children: [
            Object(Be.jsx)(zd, {
              isDisabled: n.isTrxPending,
              isWalletActive: a,
              label: "Add more CortexDAO tokens",
              tokenSelect: function (e) {
                return Object(Be.jsx)(
                  hi,
                  Object(ke.a)({ size: 32, src: Fi, alt: "cxd-icon" }, e)
                );
              },
              value: n.inputAmount,
              onChange: function (e) {
                return t({
                  type: "CHANGE_AMOUNT",
                  payload: { inputAmount: e },
                });
              },
              inputButton: Object(Be.jsx)(Ql, {
                formState: n,
                formDispatch: t,
                inputAmount: n.inputAmount,
              }),
              balance: l,
              error: n.inputAmountError,
            }),
            Object(Be.jsx)(Lu, {
              as: cn,
              gap: 3,
              children: Object(Be.jsxs)(mn, {
                justify: "spaceBetween",
                children: [
                  Object(Be.jsx)("span", {
                    children: "Vote Locked CXD (vlCXD):",
                  }),
                  Object(Be.jsxs)("span", { children: [He(Ie(s)), " vlCXD"] }),
                ],
              }),
            }),
            a
              ? Object(Be.jsx)(Ru, { formState: n, formDispatch: t })
              : Object(Be.jsx)(Un, {
                  disabled: !0,
                  isFullWidth: !0,
                  isRound: !0,
                  children: "Add CXD",
                }),
          ],
        });
      }
      var Lu = l.d.div(
        Cu || (Cu = Object(ce.a)(["\n  font-size: 14;\n  color: ", ";\n"])),
        function (e) {
          return e.theme.colors.darkGray;
        }
      );
      function Fu(e) {
        var n = e.currentForm,
          t = e.onTabClick;
        return Object(Be.jsxs)(gd, {
          children: [
            Object(Be.jsx)(yd, {
              active: "increase" === n,
              onClick: function () {
                return t("increase");
              },
              children: "Increase Amount",
            }),
            Object(Be.jsx)(yd, {
              active: "extend" === n,
              onClick: function () {
                return t("extend");
              },
              children: "Extend Time",
            }),
          ],
        });
      }
      var zu,
        Su,
        Bu,
        Pu = function (e) {
          var n = e.formState,
            t = e.formDispatch,
            i = Object(c.c)(),
            a = i.active,
            r = i.library,
            o = i.chainId,
            s = i.account,
            l = Vn("confirm"),
            u = l.setIsOpen,
            m = l.setPayload,
            j = Object(p.b)([F[o].address, "locked", s]),
            h = j.data,
            f = j.mutate,
            x = Object(p.b)(
              o && s ? [F[o].address, "balanceOf(address)", s] : []
            ).mutate,
            y =
              h && Le()(null === h || void 0 === h ? void 0 : h.end.toString()),
            g = (function () {
              var e = Object(Me.a)(
                Re.a.mark(function e(i) {
                  var a, s, c, l, p;
                  return Re.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((i.preventDefault(), r && o)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          if (n.unlockEpoch) {
                            e.next = 6;
                            break;
                          }
                          return (
                            t({
                              type: "UNLOCK_EPOCH_ERROR",
                              payload: {
                                unlockEpochError: "Choose a date below.",
                              },
                            }),
                            e.abrupt("return")
                          );
                        case 6:
                          (a = r.getSigner()),
                            (s = F[o].address),
                            (c = F[o].abi),
                            (l = new d.a.Contract(s, c, a)),
                            (p = (function () {
                              var e = Object(Me.a)(
                                Re.a.mark(function e() {
                                  var i;
                                  return Re.a.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              t({ type: "START_TRX" }),
                                              (e.prev = 1),
                                              (e.next = 4),
                                              b.b.promise(
                                                l.increase_unlock_time(
                                                  n.unlockEpoch
                                                ),
                                                {
                                                  loading:
                                                    "Confirm transaction through your wallet",
                                                  success:
                                                    "Transaction was successful!",
                                                  error: function (e) {
                                                    return e.message;
                                                  },
                                                },
                                                { success: { duration: 1e4 } }
                                              )
                                            );
                                          case 4:
                                            return (
                                              (i = e.sent),
                                              (e.next = 7),
                                              i.wait()
                                            );
                                          case 7:
                                            f(void 0, !0),
                                              x(void 0, !0),
                                              (e.next = 14);
                                            break;
                                          case 11:
                                            (e.prev = 11),
                                              (e.t0 = e.catch(1)),
                                              console.error(e.t0.message);
                                          case 14:
                                            return (
                                              (e.prev = 14),
                                              t({ type: "END_TRX" }),
                                              e.finish(14)
                                            );
                                          case 17:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [[1, 11, 14, 17]]
                                  );
                                })
                              );
                              return function () {
                                return e.apply(this, arguments);
                              };
                            })()),
                            u(!0),
                            m({
                              type: "extend",
                              unlockDate: n.unlockEpoch,
                              onConfirm: p,
                            });
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(Be.jsx)(Un, {
            disabled: !a || Qe(y) || n.isTrxPending,
            isLoading:
              n.unlockEpoch && "extend" === n.currentForm && n.isTrxPending,
            onClick: g,
            isFullWidth: !0,
            isRound: !0,
            children: "Extend Time",
          });
        };
      function Iu(e) {
        var n = e.formState,
          t = e.formDispatch,
          a = Object(c.c)(),
          r = a.active,
          o = a.chainId,
          s = a.account,
          d = Object(i.useState)(!1),
          l = Object(W.a)(d, 2),
          u = l[0],
          b = l[1],
          m = Object(p.b)(
            o && s ? [F[o].address, "balanceOf(address)", s] : []
          ).data,
          j = Object(p.b)([F[o].address, "locked", s]).data,
          h = j && Le()(null === j || void 0 === j ? void 0 : j.end.toString()),
          f = function (e) {
            e !== n.unlockEpoch &&
              (t({ type: "CHANGE_UNLOCK_EPOCH", payload: { unlockEpoch: e } }),
              b(!1));
          },
          x = ze()().unix(),
          y = null !== h && void 0 !== h && h.gt(0) ? h.toNumber() : x,
          g = Xe(Ge(B + y)),
          O = Xe(Ge(125798400 + x)),
          v = Object(ve.a)("(min-width: 701px)");
        return Object(Be.jsxs)(cn, {
          as: "form",
          gap: 6,
          children: [
            Object(Be.jsx)("label", {
              children: Object(Be.jsx)("h2", {
                children: "Extend lock duration",
              }),
            }),
            Object(Be.jsx)($l, {
              isDisabled: Qe(h) || n.isTrxPending,
              isOpen: u,
              setIsOpen: b,
              selectedDate: n.unlockEpoch,
              shortcutButtons: Object(Be.jsx)(Wu, {
                columns: v ? 8 : 4,
                children: I.map(function (e) {
                  var t = e.label,
                    i = e.addtlSecs;
                  return Object(Be.jsx)(
                    Hu,
                    {
                      type: "button",
                      disabled: Ke(Je(i), h) || n.isTrxPending,
                      onClick: function () {
                        return f(Je(i));
                      },
                      children: t,
                    },
                    t
                  );
                }),
              }),
              error: n.unlockEpochError,
              children: Object(Be.jsx)(gu, {
                currentLockEnd: h,
                currentDate: n.unlockEpoch ? Xe(n.unlockEpoch) : null,
                onChange: f,
                minDate: g,
                maxDate: O,
              }),
            }),
            Object(Be.jsx)(Nu, {
              as: cn,
              gap: 3,
              children: Object(Be.jsxs)(mn, {
                justify: "spaceBetween",
                children: [
                  Object(Be.jsx)("span", { children: "Vote Locked CXD:" }),
                  Object(Be.jsxs)("span", { children: [He(Ie(m)), " vlCXD"] }),
                ],
              }),
            }),
            r
              ? Object(Be.jsx)(Pu, { formState: n, formDispatch: t })
              : Object(Be.jsx)(Un, {
                  disabled: !0,
                  isFullWidth: !0,
                  isRound: !0,
                  children: "Extend Time",
                }),
          ],
        });
      }
      var Vu,
        Wu = l.d.div(
          zu ||
            (zu = Object(ce.a)([
              "\n  --columns: ",
              ";\n  /* border: 1px solid green; */\n  display: grid;\n  grid-template-columns: repeat(var(--columns), 1fr);\n  gap: 1rem;\n",
            ])),
          function (e) {
            var n = e.columns;
            return void 0 === n ? 8 : n;
          }
        ),
        Hu = l.d.button(
          Su || (Su = Object(ce.a)(["\n  /* width: 60px; */\n"]))
        ),
        Nu = l.d.div(
          Bu || (Bu = Object(ce.a)(["\n  font-size: 14;\n  color: ", ";\n"])),
          function (e) {
            return e.theme.colors.darkGray;
          }
        );
      function Uu(e) {
        var n = e.formState,
          t = e.formDispatch,
          i = Object(c.c)(),
          a = i.active,
          r = i.library,
          o = i.chainId,
          s = i.account,
          l = Object(p.b)([D[o].cxd.address, "balanceOf", s]).mutate,
          u = Object(p.b)([F[o].address, "locked", s]).mutate,
          m = (function () {
            var e = Object(Me.a)(
              Re.a.mark(function e(n) {
                var i, a, s, c, p;
                return Re.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((n.preventDefault(), r && o)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          return (
                            t({ type: "START_TRX" }),
                            (i = r.getSigner()),
                            (a = F[o].address),
                            (s = F[o].abi),
                            (c = new d.a.Contract(a, s, i)),
                            (e.prev = 8),
                            (e.next = 11),
                            b.b.promise(
                              c.withdraw(),
                              {
                                loading:
                                  "Confirm transaction through your wallet",
                                success: "Transaction was successful!",
                                error: function (e) {
                                  return e.message;
                                },
                              },
                              { success: { duration: 1e4 } }
                            )
                          );
                        case 11:
                          return (p = e.sent), (e.next = 14), p.wait();
                        case 14:
                          l(void 0, !0), u(void 0, !0), (e.next = 21);
                          break;
                        case 18:
                          (e.prev = 18),
                            (e.t0 = e.catch(8)),
                            console.error(e.t0.message);
                        case 21:
                          t({ type: "END_TRX" });
                        case 22:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[8, 18]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
        return Object(Be.jsx)(ep, {
          disabled: !a || n.isTrxPending,
          isLoading: n.isTrxPending,
          onClick: m,
          isRound: !0,
          children: "Unlock CXD",
        });
      }
      var Xu,
        Gu,
        Zu,
        Yu,
        qu,
        Ju,
        Ku,
        Qu,
        _u,
        $u,
        ep = Object(l.d)(Un)(
          Vu || (Vu = Object(ce.a)(["\n  width: 210px;\n"]))
        ),
        np = function (e) {
          var n = e.children;
          return Object(Be.jsxs)(Xc, { children: [n, Object(Be.jsx)(Zn, {})] });
        },
        tp = function () {
          var e,
            n,
            t,
            a,
            r = Object(c.c)(),
            o = r.active,
            s = r.library,
            d = r.chainId,
            l = r.account,
            u = Object(i.useReducer)(Kl, {
              currentForm: "lock",
              inputAmount: null,
              unlockEpoch: null,
              inputAmountError: null,
              unlockEpochError: null,
              isTrxPending: null,
            }),
            p = Object(W.a)(u, 2),
            b = p[0],
            m = p[1],
            j = Wl(s, d, l);
          Object(i.useEffect)(
            function () {
              var e, n;
              null !== (e = j.data) &&
              void 0 !== e &&
              e.amount.gt(0) &&
              !j.data.isExpired &&
              "lock" === b.currentForm
                ? m({
                    type: "CHANGE_FORM",
                    payload: { currentForm: "increase" },
                  })
                : null !== (n = j.data) &&
                  void 0 !== n &&
                  n.isExpired &&
                  m({ type: "CHANGE_FORM", payload: { currentForm: "lock" } });
            },
            [j, b.currentForm]
          );
          var h = {
              lock: Object(Be.jsx)(Au, { formState: b, formDispatch: m }),
              increase: Object(Be.jsx)(Du, { formState: b, formDispatch: m }),
              extend: Object(Be.jsx)(Iu, {
                formState: b,
                formDispatch: m,
                currentLockEnd:
                  null === (e = j.data) || void 0 === e ? void 0 : e.end,
              }),
            },
            f = Object(ve.a)("(min-width: 1201px)");
          return Object(Be.jsxs)(ip, {
            as: un,
            spread: f ? 2 : 1,
            isDisabled:
              !o ||
              (null === (n = j.data) || void 0 === n ? void 0 : n.isExpired),
            shadow: !0,
            bordered: !1,
            children: [
              Object(Be.jsxs)(cn, {
                gap: 6,
                children: [
                  o &&
                    (null === (t = j.data) || void 0 === t
                      ? void 0
                      : t.amount.gt(0)) &&
                    !j.data.isExpired &&
                    Object(Be.jsx)(Fu, {
                      currentForm: b.currentForm,
                      onTabClick: function (e) {
                        return (function (e) {
                          e === b.currentForm ||
                            b.isTrxPending ||
                            m({
                              type: "CHANGE_FORM",
                              payload: { currentForm: e },
                            });
                        })(e);
                      },
                    }),
                  h[b.currentForm],
                ],
              }),
              !o &&
                Object(Be.jsx)(np, {
                  children:
                    "Connect your wallet, and get CortexDAO tokens to be able to lock them and receive rewards.",
                }),
              o &&
                (null === (a = j.data) || void 0 === a
                  ? void 0
                  : a.isExpired) &&
                Object(Be.jsxs)(Xc, {
                  children: [
                    "Your lock has expired. You must withdraw your tokens before creating a new lock.",
                    Object(Be.jsx)(Uu, { formState: b, formDispatch: m }),
                  ],
                }),
            ],
          });
        },
        ip = Object(l.d)(Uc)(
          Xu || (Xu = Object(ce.a)(["\n  align-self: start;\n  z-index: 1;\n"]))
        ),
        ap = t.p + "static/media/gift.32d13262.svg",
        rp = t.p + "static/media/globe.c2ee198c.svg",
        op = t.p + "static/media/users.cde1302a.svg",
        sp = t.p + "static/media/cortex-glass-0.85611ca3.png";
      function cp(e) {
        var n = e.as,
          t = e.spread,
          i = Object(ve.a)("(min-width: 1201px)");
        return Object(Be.jsx)(lp, {
          as: n,
          spread: t,
          children: Object(Be.jsxs)(cn, {
            gap: 6,
            children: [
              Object(Be.jsxs)(up, {
                children: [
                  Object(Be.jsx)("img", { src: Fi, alt: "cxd-icon" }),
                  "Why join CortexDAO?",
                ],
              }),
              Object(Be.jsxs)(pp, {
                columns: 3,
                children: [
                  Object(Be.jsxs)(bp, {
                    padding: i ? [2, 6] : [2, 3],
                    children: [
                      Object(Be.jsx)("div", {
                        children: Object(Be.jsx)("img", {
                          src: ap,
                          alt: "gift-icon",
                        }),
                      }),
                      "Contribute to the DAO and earn rewards.",
                    ],
                  }),
                  Object(Be.jsxs)(bp, {
                    padding: i ? [2, 6] : [2, 3],
                    children: [
                      Object(Be.jsx)("div", {
                        children: Object(Be.jsx)("img", {
                          src: rp,
                          alt: "globe-icon",
                        }),
                      }),
                      "Help build one of the largest ecosystems in DeFi.",
                    ],
                  }),
                  Object(Be.jsxs)(bp, {
                    padding: i ? [2, 6] : [2, 3],
                    children: [
                      Object(Be.jsx)("div", {
                        children: Object(Be.jsx)("img", {
                          src: op,
                          alt: "users-icon",
                        }),
                      }),
                      "Join like-minded DAO members ready to take over DeFi!",
                    ],
                  }),
                ],
              }),
              Object(Be.jsxs)(mp, {
                children: [
                  "Join our community on Twitter!",
                  Object(Be.jsx)("a", {
                    href: "https://twitter.com/CortexDAO",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: Object(Be.jsx)(Un, {
                      isRound: !0,
                      children: "Join",
                    }),
                  }),
                ],
              }),
              Object(Be.jsxs)(cn, {
                gap: 5,
                children: [
                  Object(Be.jsx)(jp, { children: "Locked CXD Rewards" }),
                  Object(Be.jsxs)(hp, {
                    columns: 3,
                    children: [
                      Object(Be.jsx)(fp, {
                        children: Object(Be.jsxs)(cn, {
                          gap: 3,
                          children: [
                            Object(Be.jsx)(xp, {
                              children: "Fee Distribution",
                            }),
                            Object(Be.jsx)("p", {
                              children: "Earn a portion of protocol revenue.",
                            }),
                          ],
                        }),
                      }),
                      Object(Be.jsx)(fp, {
                        children: Object(Be.jsxs)(cn, {
                          gap: 3,
                          children: [
                            Object(Be.jsx)(xp, { children: "Boosted Rewards" }),
                            Object(Be.jsx)("p", {
                              children: "Boost your Convex Index earnings.",
                            }),
                          ],
                        }),
                      }),
                      Object(Be.jsx)(fp, {
                        children: Object(Be.jsxs)(cn, {
                          gap: 3,
                          children: [
                            Object(Be.jsx)(xp, { children: "Voting Power" }),
                            Object(Be.jsx)("p", {
                              children: "Participate in protocol governance.",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var dp,
        lp = Object(l.d)(Uc)(
          Gu ||
            (Gu = Object(ce.a)([
              "\n  align-self: start;\n  background: url(",
              "),\n    linear-gradient(107.6deg, #1a202e 12.63%, #374055 62.04%);\n  background-repeat: no-repeat;\n  background-position: 100% 0%;\n  z-index: 0;\n",
            ])),
          sp
        ),
        up = l.d.div(
          Zu ||
            (Zu = Object(ce.a)([
              "\n  display: flex;\n  align-items: center;\n  font-size: 32px;\n  font-weight: 400;\n  color: #fafafa;\n\n  & > img {\n    width: 32px;\n    height: 32px;\n    margin-right: ",
              ";\n  }\n\n  @media (min-width: 501px) {\n    font-size: 36px;\n\n    & > img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n",
            ])),
          function (e) {
            var n,
              t = e.theme,
              i = e.gap;
            return null !== (n = t.space[i]) && void 0 !== n ? n : ".75rem";
          }
        ),
        pp = Object(l.d)(ln)(
          Yu ||
            (Yu = Object(ce.a)([
              "\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n\n  @media (min-width: 501px) {\n    display: grid;\n  }\n",
            ]))
        ),
        bp = Object(l.d)(jn)(
          qu ||
            (qu = Object(ce.a)([
              "\n  /* border: 1px solid blue; */\n  & > :first-child {\n    margin-bottom: 0.5rem;\n  }\n  padding: 0.25rem;\n  font-weight: 500;\n  font-size: 12px;\n  color: #a5abbb;\n  text-align: center;\n\n  @media (min-width: 501px) {\n    padding: 1rem;\n  }\n",
            ]))
        ),
        mp = Object(l.d)(Uc)(
          Ju ||
            (Ju = Object(ce.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #656e85;\n  background: rgba(239, 239, 242, 0.08);\n  box-shadow: 0px 4px 12px rgba(43, 31, 79, 0.07);\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 26px;\n  color: #72c9a9;\n  padding: 0.5rem;\n\n  button {\n    margin-left: 1rem;\n  }\n\n  @media (min-width: 701px) {\n    padding: 1.5rem;\n    button {\n      margin-left: 1.5rem;\n      width: 210px;\n    }\n  }\n",
            ]))
        ),
        jp = l.d.h3(
          Ku ||
            (Ku = Object(ce.a)([
              "\n  font-weight: 400;\n  font-size: 20px;\n  color: #fafafa;\n",
            ]))
        ),
        hp = Object(l.d)(ln)(
          Qu ||
            (Qu = Object(ce.a)([
              "\n  /* border: 1px solid red; */\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 3rem;\n  font-size: 14px;\n\n  @media (min-width: 701px) {\n    display: grid;\n  }\n",
            ]))
        ),
        fp = Object(l.d)(jn)(
          _u ||
            (_u = Object(ce.a)([
              "\n  border: 1px solid blue;\n  background: rgba(239, 239, 242, 0.08);\n  border: 1px solid #656e85;\n  border-radius: 10px;\n  min-height: 100px;\n\n  p {\n    font-weight: 500;\n    font-size: inherit;\n    color: #a5abbb;\n  }\n",
            ]))
        ),
        xp = l.d.h3(
          $u ||
            ($u = Object(ce.a)([
              "\n  font-weight: 600;\n  font-size: inherit;\n  color: #fafafa;\n",
            ]))
        );
      var yp,
        gp,
        Op = Object(l.d)(ln)(
          dp ||
            (dp = Object(ce.a)([
              "\n  justify-items: stretch;\n  align-items: stretch;\n",
            ]))
        ),
        vp = function () {
          var e = Object(ve.a)("(min-width: 1001px)"),
            n = Object(ve.a)("(min-width: 1201px)");
          return Object(Be.jsxs)(cn, {
            children: [
              Object(Be.jsx)(Vl, {}),
              Object(Be.jsx)(Jl, {}),
              Object(Be.jsxs)(Op, {
                columns: n ? 5 : e ? 2 : 1,
                children: [
                  Object(Be.jsx)(tp, {}),
                  Object(Be.jsx)(cp, { as: un, spread: n ? 3 : 1 }),
                ],
              }),
            ],
          });
        },
        wp = t(163);
      var kp = Object(l.d)(Uc)(
          yp ||
            (yp = Object(ce.a)([
              "\n  background-color: ",
              ";\n  border: 1px solid ",
              ";\n  border-radius: ",
              ";\n  width: 300px;\n\n  ",
              "\n",
            ])),
          function (e) {
            return e.theme.colors.whitePrimary;
          },
          function (e) {
            return e.theme.colors.darkGray;
          },
          function (e) {
            return e.theme.borderRadius;
          },
          function (e) {
            var n = e.theme;
            return "\n      @media ".concat(
              n.breakpoints.tablet,
              " {\n        width: 350px;\n      }\n    "
            );
          }
        ),
        Ap = Object(l.d)(Un)(
          gp ||
            (gp = Object(ce.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: left;\n  text-transform: initial;\n  background-color: ",
              ";\n  border: 1px solid ",
              ";\n  border-radius: 5px;\n  padding: 0.65rem 1rem;\n  color: initial;\n",
            ])),
          function (e) {
            return e.theme.colors.whitePrimary;
          },
          function (e) {
            return e.theme.colors.brightGray;
          }
        ),
        Cp = function () {
          var e = Object(c.c)().activate,
            n = Vn("wallets"),
            t = n.isOpen,
            a = n.setIsOpen,
            r = Object(i.useState)(!0),
            o = Object(W.a)(r, 2),
            s = o[0],
            d = o[1];
          Object(i.useEffect)(function () {
            wp.a.isMetaMaskInstalled() ? d(!0) : d(!1);
          }, []);
          var l = (function () {
            var n = Object(Me.a)(
              Re.a.mark(function n(t) {
                return Re.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), e(t);
                        case 3:
                          n.next = 8;
                          break;
                        case 5:
                          (n.prev = 5),
                            (n.t0 = n.catch(0)),
                            console.error(n.t0.message);
                        case 8:
                          a(!1);
                        case 9:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 5]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
          return Object(Be.jsx)(yl, {
            isOpen: t,
            close: function () {
              return a(!1);
            },
            children: Object(Be.jsxs)(kp, {
              as: cn,
              padding: 4,
              children: [
                Object(Be.jsxs)(mn, {
                  justify: "spaceBetween",
                  align: "center",
                  children: [
                    Object(Be.jsx)("h2", { children: "Connect a wallet" }),
                    Object(Be.jsx)(Un, {
                      variant: "icon",
                      onClick: function () {
                        return a(!1);
                      },
                      style: { fontSize: 22 },
                      children: "\u2715",
                    }),
                  ],
                }),
                Object(Be.jsx)(cn, {
                  children: s
                    ? Object(Be.jsxs)(Ap, {
                        isFullWidth: !0,
                        onClick: function () {
                          return l(A);
                        },
                        children: [
                          Object(Be.jsx)("span", { children: "MetaMask" }),
                          Object(Be.jsx)("img", {
                            src: An,
                            alt: "metamask-icon",
                          }),
                        ],
                      })
                    : Object(Be.jsx)("a", {
                        href: "https://metamask.io/download/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: Object(Be.jsxs)(Ap, {
                          isFullWidth: !0,
                          onClick: function () {
                            return l(A);
                          },
                          children: [
                            Object(Be.jsx)("span", {
                              children: "Install MetaMask",
                            }),
                            Object(Be.jsx)("img", {
                              src: An,
                              alt: "metamask-icon",
                            }),
                          ],
                        }),
                      }),
                }),
              ],
            }),
          });
        };
      var Tp = function () {
          var e,
            n = Object(c.c)(),
            t = n.library,
            a = n.chainId,
            r = Object(c.c)("READ_ONLY"),
            o = r.activate,
            s = r.library,
            d = r.chainId;
          Object(i.useEffect)(
            function () {
              o(k);
            },
            [o]
          );
          var j = (function () {
            var e = Object(c.c)(),
              n = e.activate,
              t = e.active,
              a = Object(i.useState)(!1),
              r = Object(W.a)(a, 2),
              o = r[0],
              s = r[1];
            return (
              Object(i.useEffect)(
                function () {
                  A.isAuthorized().then(function (e) {
                    e
                      ? n(A, void 0, !0).catch(function () {
                          s(!0);
                        })
                      : s(!0);
                  });
                },
                [n]
              ),
              Object(i.useEffect)(
                function () {
                  !o && t && s(!0);
                },
                [o, t]
              ),
              o
            );
          })();
          !(function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              n = Object(c.c)(),
              t = n.active,
              a = n.error,
              r = n.activate;
            Object(i.useEffect)(
              function () {
                var n = window.ethereum;
                if (n && n.on && !t && !a && !e) {
                  var i = function (e) {
                      console.log("chainChanged", e), r(A);
                    },
                    o = function (e) {
                      console.log("accountsChanged", e), e.length > 0 && r(A);
                    },
                    s = function (e) {
                      console.log("networkChanged", e), r(A);
                    };
                  return (
                    n.on("chainChanged", i),
                    n.on("accountsChanged", o),
                    n.on("networkChanged", s),
                    function () {
                      n.removeListener &&
                        (n.removeListener("chainChanged", i),
                        n.removeListener("accountsChanged", o),
                        n.removeListener("networkChanged", s));
                    }
                  );
                }
                return function () {};
              },
              [t, a, e, r]
            );
          })(!j);
          var h = f(function (e) {
            return e.isDrawerOpen;
          });
          return Object(Be.jsxs)(l.a, {
            theme: se,
            children: [
              Object(Be.jsx)(Oe, { isDrawOpen: h }),
              Object(Be.jsx)(m.a, {
                value: { revalidateOnFocus: !1 },
                children: Object(Be.jsxs)(p.a, {
                  value: {
                    web3Provider:
                      null !== (e = null !== t && void 0 !== t ? t : s) &&
                      void 0 !== e
                        ? e
                        : V,
                    ABIs: new Map(S[null !== a && void 0 !== a ? a : d]),
                    shouldRetryOnError: !1,
                    revalidateOnFocus: !1,
                  },
                  children: [
                    Object(Be.jsx)(b.a, {
                      containerStyle: { margin: "0 auto", top: "100px" },
                    }),
                    Object(Be.jsx)(Cp, {}),
                    Object(Be.jsx)(mi, {
                      children: Object(Be.jsxs)(u.d, {
                        children: [
                          Object(Be.jsx)(u.b, {
                            path: "/",
                            element: Object(Be.jsx)(Bc, {}),
                          }),
                          Object(Be.jsx)(u.b, {
                            path: "/home",
                            element: Object(Be.jsx)(hd, {}),
                          }),
                          Object(Be.jsx)(u.b, {
                            path: "/deposit",
                            element: Object(Be.jsx)(Dl, {}),
                          }),
                          Object(Be.jsx)(u.b, {
                            path: "/lock-cxd",
                            element: Object(Be.jsx)(vp, {}),
                          }),
                          Object(Be.jsx)(u.b, {
                            path: "*",
                            element: Object(Be.jsx)(u.a, { to: "/" }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Mp = function (e) {
          e &&
            e instanceof Function &&
            t
              .e(7)
              .then(t.bind(null, 565))
              .then(function (n) {
                var t = n.getCLS,
                  i = n.getFID,
                  a = n.getFCP,
                  r = n.getLCP,
                  o = n.getTTFB;
                t(e), i(e), a(e), r(e), o(e);
              });
        };
      function Ep(e) {
        var n = new d.a.providers.Web3Provider(e);
        return (n.pollingInterval = 8e3), n;
      }
      var Rp = Object(c.b)("READ_ONLY");
      o.a.render(
        Object(Be.jsx)(a.a.StrictMode, {
          children: Object(Be.jsx)(Rp, {
            getLibrary: Ep,
            children: Object(Be.jsx)(c.a, {
              getLibrary: Ep,
              children: Object(Be.jsx)(s.a, {
                children: Object(Be.jsx)(Tp, {}),
              }),
            }),
          }),
        }),
        document.getElementById("root")
      ),
        Mp();
    },
  },
  [[228, 2, 3]],
]);
