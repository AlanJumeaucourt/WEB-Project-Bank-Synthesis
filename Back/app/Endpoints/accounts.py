from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

import mariadb

from app.utils.db_utils import list_accounts_db, get_account_balance_db, get_account_balance_cumulative_db


def list_accounts(username):
    accounts, column_names = list_accounts_db(username)

    formatted_accounts = []
    for account in accounts:
        formatted_account = dict(zip(column_names, account))
        formatted_accounts.append(formatted_account)

    return formatted_accounts


def get_account_balance(compte_id, username):
    return get_account_balance_db(compte_id, username)


def get_account_balance_cumulative(compte_id, username):
    return get_account_balance_cumulative_db(compte_id, username)
