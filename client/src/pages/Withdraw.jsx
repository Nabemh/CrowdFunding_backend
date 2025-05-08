import React,  { useState, useEffect } from "react"
import { ArrowRight, CreditCard, DollarSign, HelpCircle, Wallet } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
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
                      <Label htmlFor="amount" className="text-base">
                        Amount
                      </Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <HelpCircle className="h-4 w-4" />
                              <span className="sr-only">Help</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              You can withdraw up to your available balance. Withdrawals typically process within 3-5
                              business days.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text" />
                      <Input id="amount" placeholder="0.00" className="pl-10" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text">Available: $12,450.00</span>
                      <button className="font-medium text-emerald-600 hover:text-emerald-700">Max</button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base">Payment Method</Label>
                    <RadioGroup defaultValue="bank" className="grid gap-4 pt-2">
                      <div className="relative flex items-start">
                        <RadioGroupItem value="bank" id="bank" className="mt-1 peer sr-only" />
                        <Label
                          htmlFor="bank"
                          className="flex w-full cursor-pointer items-center rounded-lg border border-slate-200 bg-white p-4 hover:bg-slate-50 peer-data-[state=checked]:border-emerald-500 peer-data-[state=checked]:ring-1 peer-data-[state=checked]:ring-emerald-500"
                        >
                          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            <CreditCard className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">Bank Account</div>
                            <div className="text-sm text-text">3-5 business days, no fees</div>
                          </div>
                        </Label>
                      </div>

                      <div className="relative flex items-start">
                        <RadioGroupItem value="paypal" id="paypal" className="mt-1 peer sr-only" />
                        <Label
                          htmlFor="paypal"
                          className="flex w-full cursor-pointer items-center rounded-lg border border-slate-200 bg-white p-4 hover:bg-slate-50 peer-data-[state=checked]:border-emerald-500 peer-data-[state=checked]:ring-1 peer-data-[state=checked]:ring-emerald-500"
                        >
                          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            <Wallet className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">PayPal</div>
                            <div className="text-sm text-text">Instant, 1.5% fee</div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="account" className="text-base">
                      Select Account
                    </Label>
                    <Select>
                      <SelectTrigger id="account">
                        <SelectValue placeholder="Select an account" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chase">Chase Bank (...4582)</SelectItem>
                        <SelectItem value="wells">Wells Fargo (...7291)</SelectItem>
                        <SelectItem value="new">+ Add new account</SelectItem>
                      </SelectContent>
                    </Select>
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
                  <Button variant="outline" className="w-full">
                    View All Transactions
                  </Button>
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