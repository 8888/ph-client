import { Injectable } from '@angular/core';

export enum States {
  Actionless = 0,
  ShowingToBeSeen = 1,
  ShowingRequested = 2,
  Seen = 3,
  Discontinue = 4,
  Investigate = 5,
  ContractActionNeeded = 6,
  ContractAwaitingResponse = 7,
  SaleComplete = 8,
  RentalUnit = 9
}

@Injectable({
  providedIn: 'root'
})
export class PropertyStateService {
  private states = {
    [States.Actionless]: {
      name: 'Actionless',
      availableActions: [States.ShowingToBeSeen, States.Discontinue]
    },
    [States.ShowingToBeSeen]: {
      name: 'Showing: to be seen',
      availableActions: [States.ShowingRequested, States.Discontinue]
    },
    [States.ShowingRequested]: {
      name: 'Showing: requested',
      availableActions: [States.ShowingToBeSeen, States.Seen, States.Discontinue]
    },
    [States.Seen]: {
      name: 'Seen',
      availableActions: [States.Investigate, States.Discontinue]
    },
    [States.Discontinue]: {
      name: 'Discontinue',
      availableActions: []
    },
    [States.Investigate]: {
      name: 'Investigate',
      availableActions: [States.ContractActionNeeded, States.Discontinue]
    },
    [States.ContractActionNeeded]: {
      name: 'Contract: action needed',
      availableActions: [States.ContractAwaitingResponse, States.SaleComplete, States.Discontinue]
    },
    [States.ContractAwaitingResponse]: {
      name: 'Contract: awaiting response',
      availableActions: [States.ContractActionNeeded, States.SaleComplete, States.Discontinue]
    },
    [States.SaleComplete]: {
      name: 'Sale complete',
      availableActions: [States.RentalUnit]
    },
    [States.RentalUnit]: {
      name: 'Rental unit',
      availableActions: []
    },
  };

  public getStateName(state: States): string {
    return this.states[state].name;
  }

  public getAvailableActions(state: States): States[] {
    return this.states[state].availableActions;
  }
}
