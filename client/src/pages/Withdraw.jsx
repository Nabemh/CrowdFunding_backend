import React,  { useState, useEffect } from "react"
import { ArrowRight, CreditCard, DollarSign, HelpCircle, Wallet } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { FormField } from '../components';
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Separator } from "../components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"

const Withdraw = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-text">Withdraw Funds</h2>
            <p className="mt-2 text-text">Transfer your project funds to your preferred payment method.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Withdrawal Details</CardTitle>
                  <CardDescription>Choose how much you want to withdraw and where to send it.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                    <FormField
                      labelName="Amount *"
                      placeholder="$0.00"
                      inputType="text"
                      value={''}
                    />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text">Available: $12,450.00</span>
                      <button className="font-medium text-emerald-600 hover:text-emerald-700">Max</button>
                    </div>
                  </div>

                  <div className="space-y-2">
                  <FormField
                    labelName="Wallet address *"
                    placeholder="Enter wallet address"
                    inputType="text"
                    value={''}
                  />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Separator />
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <p className="text-sm text-text">Processing Fee</p>
                      <p className="text-sm font-medium">$0.00</p>
                    </div>
                    <Button className="gap-2 bg-[#1dc071] hover:bg-[#46ee9c] text-text">
                      Withdraw Funds
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { date: "Apr 28, 2023", amount: "$2,500.00", status: "Completed" },
                    { date: "Mar 15, 2023", amount: "$1,750.00", status: "Completed" },
                    { date: "Feb 02, 2023", amount: "$3,200.00", status: "Completed" },
                  ].map((transaction, i) => (
                    <div key={i} className="space-y-1 rounded-lg border border-slate-200 p-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{transaction.amount}</span>
                        <span
                          className={
                            transaction.status === "Completed"
                              ? "text-xs font-medium text-emerald-600"
                              : "text-xs font-medium text-amber-600"
                          }
                        >
                          {transaction.status}
                        </span>
                      </div>
                      <p className="text-xs text-text">{transaction.date}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Withdraw